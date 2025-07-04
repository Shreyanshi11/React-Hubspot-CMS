import React from 'react';
import { logInfo, RichText, Link } from '@hubspot/cms-components';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import Styles from '../ResourcesBlog/Resourcesblog.module.css';

export function Component(props) {
  const { blog_field } = props;

  logInfo(props, 'Resources Blog');

  const posts = blog_field?.posts || [];

  return (
    <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
        <div className="page-center">
            <div className={Styles.blogpost_container}>
                {posts.length > 0 ? (
                posts.map((post, index) => (
                    <div key={index} className={Styles.blog_card}>
                    {/* Featured Image */}
                    {post.featuredImage?.url && (
                        <img
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt || post.name}
                        className={Styles.blog_image}
                        />
                    )}

                    {/* Title */}
                    <h2 className={Styles.blog_title}>
                        <Link href={post.absoluteUrl}>{post.name}</Link>
                    </h2>

                    {/* Summary / Post body (optional) */}
                    {post.postSummary && (
                        <div className={Styles.blog_summary}>
                        <RichText html={post.postSummary} />
                        </div>
                    )}
                    </div>
                ))
                ) : (
                <p>No blog posts found.</p>
                )}
            </div>
      </div>
    </ResponsiveSpacingWrapper>
  );
}

export { fields } from './fields.jsx';

export const meta = {
  label: 'Resources Blog Module',
};
