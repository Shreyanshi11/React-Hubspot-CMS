import {
    ModuleFields,
    MenuField,
    FieldGroup,
    AlignmentField,
    ColorField,
    LogoField,
    TextField,
    BooleanField,
    IconField,
    
  } from '@hubspot/cms-components/fields';
  import ButtonContent from '../../components/ButtonComponent/ButtonContent.jsx';
  import ButtonStyle from '../../components/ButtonComponent/ButtonStyle.jsx';

  
  const showButton = {
    controlling_field_path: 'groupButton.showButton',
    controlling_value_regex: 'true',
    operator: 'EQUAL',
  };
  
  const advancedShowButton = {
    boolean_operator: 'OR',
    criteria: [showButton],
  } ;

  const buttonTypeVisibility = {
  boolean_operator: 'OR',
  criteria: [
    {
      controlling_field_path: 'groupButton.buttonContentType',
      operator: 'EQUAL',
      controlling_value_regex: 'button',
    }
  ]
}
const ctaTypeVisibility = {
  boolean_operator: 'OR',
  criteria: [
    {
      controlling_field_path: 'groupButton.buttonContentType',
      operator: 'EQUAL',
      controlling_value_regex: 'cta',
    }
  ]
}
  
  export const fields = (
    <ModuleFields>
      <FieldGroup label="Logo" name="groupLogo" display="inline">
        <LogoField label="Logo" name="logo" showLoading={false} />
      </FieldGroup>
      <FieldGroup label="Navigation" name="groupNavigation" display="inline">
        <MenuField label="Menu" name="menu" default="default" />
      </FieldGroup>
      <FieldGroup label="Button" name="groupButton" display="inline">
        <ButtonContent
          textDefault="Get started"
          linkDefault={{
            open_in_new_tab: false,
          }}
          iconPositionDefault="right"
          buttonVisibility={buttonTypeVisibility}
          ctaVisibility={ctaTypeVisibility}
        />
      </FieldGroup>
      <FieldGroup label="Default content" name="defaultContent" locked={true}>
        <TextField label="Logo link aria text" name="logoLinkAriaText" default="Homepage" locked={true} />
              <TextField label="Lang switcher select text" name="languageSwitcherSelectText" default="Select a language" locked={true} />

      </FieldGroup>
      <IconField
      label="Language switcher icon"
      name="globe_icon"
      iconSet="fontawesome-6.4.2"
      default={{
        name: 'earth-americas',
      }}
      required={true}
      locked={true}
    />
      <FieldGroup label="Styles" name="styles" tab="STYLE">
        <FieldGroup label="Menu" name="groupMenu" display="inline">
          <ColorField
            label="Text color (default)"
            name="menuTextColor"
            helpText="Controls the color of text in the navigation bar. Also controls the color of the hamburger menu."
            visibility={{
              hidden_subfields: {
                opacity: true,
              },
            }}
            limitedOptions={[
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_1.group_fonts.text_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_2.group_fonts.text_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_3.group_fonts.text_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_dark_section_1.group_fonts.text_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_1.group_fonts.accent_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_2.group_fonts.accent_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_3.group_fonts.accent_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_dark_section_1.group_fonts.accent_color.color',
            ]}
            default={{ color: '#09152B' }}
          />
          <ColorField
            label="Text color (hover)"
            name="menuTextHoverColor"
            visibility={{
              hidden_subfields: {
                opacity: true,
              },
            }}
            limitedOptions={[
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_1.group_fonts.text_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_2.group_fonts.text_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_3.group_fonts.text_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_dark_section_1.group_fonts.text_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_1.group_fonts.accent_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_2.group_fonts.accent_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_3.group_fonts.accent_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_dark_section_1.group_fonts.accent_color.color',
            ]}
            inheritedValuePropertyValuePaths={{
            //   color: 'module.styles.groupMenu.menuTextColor.color',
            }}
          />
          <ColorField
            label="Accent color"
            name="menuAccentColor"
            helpText="Controls the color of menu item hover states and the border color of flyout menus."
            visibility={{
              hidden_subfields: {
                opacity: true,
              },
            }}
            limitedOptions={[
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_1.group_fonts.text_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_2.group_fonts.text_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_3.group_fonts.text_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_dark_section_1.group_fonts.text_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_1.group_fonts.accent_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_2.group_fonts.accent_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_3.group_fonts.accent_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_dark_section_1.group_fonts.accent_color.color',
            ]}
            default={{ color: '#F7F9FC' }}
          />
          <ColorField
            label="Background color"
            name="menuBackgroundColor"
            visibility={{
              hidden_subfields: {
                opacity: true,
              },
            }}
            limitedOptions={[
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_1.group_section.background_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_2.group_section.background_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_light_section_3.group_section.background_color.color',
            //   'theme.group_foundation.group_colors.group_more_settings.group_sections.group_dark_section_1.group_section.background_color.color',
            ]}
            default={{ color: '#ffffff' }}
          />
          <AlignmentField
            label="Horizontal alignment"
            name="menuAlignment"
            required={true}
            alignmentDirection="HORIZONTAL"
            default={{ horizontal_align: 'CENTER' }}
          />
        </FieldGroup>
        <FieldGroup label="Button" name="groupButton" display="inline">
          <ButtonStyle
            buttonStyleDefault="primary"
            buttonSizeDefault="medium"
            buttonSizeVisibility={buttonTypeVisibility}
            buttonStyleVisibility={buttonTypeVisibility}
          />
        </FieldGroup>
      </FieldGroup>
    </ModuleFields>
  );
  