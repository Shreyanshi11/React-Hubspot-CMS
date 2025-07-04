import React from 'react';
import { logInfo, RichText, BlogPosts } from '@hubspot/cms-components';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import Styles from '../ResourcesBlog/Resourcesblog.module.css';

export function Component(props) {
  const { blog_field } = props;
  const blogId = blog_field?.blog?.id;

  logInfo(blog_field, 'Resources Blog');

  return (
    <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
      <div className="page-center">
        <div className={Styles.blogpost_container}>
          {blogId ? (
            <BlogPosts blog={blogId} limit={5}>
              {(posts) =>
                posts.length > 0 ? (
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
                        <a
                          href={post.absoluteUrl}
                          target="_self" // or "_blank" if you want
                          rel="noopener noreferrer"
                        >
                          {post.name}
                        </a>
                      </h2>

                      {/* Summary */}
                      {post.postSummary && (
                        <div className={Styles.blog_summary}>
                          <RichText html={post.postSummary} />
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <p>No blog posts found.</p>
                )
              }
            </BlogPosts>
          ) : (
            <p>No blog selected.</p>
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
