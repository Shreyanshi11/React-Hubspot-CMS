import React from 'react';
import { logInfo, Island } from '@hubspot/cms-components';
import HeadingComponent from '../../components/HeadingComponent/HeadingComponent.jsx';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import HubdbFilter from '../../islands/hubdbFilter?island';
import Styles from '../HubdbFilter/hubdbFilter.module.css';

export const hublDataTemplate = `
 {% set table1 = hubdb_table_rows(module.hubdb_table) %}
 {% set language_image = [] %}
 {% set language_type = [] %}
 {% for row in table1 %}
   {% do language_image.append(row.language_image) %}
   {% do language_type.append(row.language_type) %}
 {% endfor %}
 {% set hublData = {
   "language_image": language_image,
   "language_type": language_type,
   "table1": table1
 } %}
 {{ hublData|tojson }}
`;

export function Component(props) {

  const image = Array.isArray(props.hublData?.language_image)
    ? props.hublData.language_image
    : [];
  const ltype = Array.isArray(props.hublData?.language_type)
    ? props.hublData.language_type
    : [];

  const {
    module_id,
    showBorder,
    heading_group: {
      headingAndTextHeadingLevel,
      headingAndTextHeading,
      headingStyleVariant
    },
    hubdb_table
  } = props;

  logInfo(props, 'Hubdb Filter');

  return (
    <>
      <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
        <div className={Styles.hubdb_filter_sec}>
          <div className="page-center">
              

            <div className={Styles.heading_container}>
              {showBorder && <div className='gradient-border' style={{ marginBottom: '20px' }}></div>}
              
              {headingAndTextHeading && (
                <HeadingComponent headingLevel={headingAndTextHeadingLevel} headingStyleVariant={headingStyleVariant} heading={headingAndTextHeading} />
              )}
            </div>

            <div className={Styles.hubdb_filter_container}>
              <Island module={HubdbFilter} language_type={ltype} language_image={image} clientOnly hydrateOn='idle' />
            </div>
          </div>
        </div>
      </ResponsiveSpacingWrapper>
    </>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Hubdb Filter Module',
};
