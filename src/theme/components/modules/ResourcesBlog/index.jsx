import React, { useEffect, useState } from 'react';
import { logInfo, RichText } from '@hubspot/cms-components';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import Styles from '../ResourcesBlog/Resourcesblog.module.css';

export function Component(props) {
  const { blog_field } = props;
  const blogId = blog_field?.blog?.id;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  logInfo(props, 'Resources Blog');

  useEffect(() => {
    async function loadPosts() {
      try {
        const res = await fetch(`/_hcms/api/blogs/${blogId}/posts?limit=5`);
        const data = await res.json();
        setPosts(data.objects || []);
      } catch (error) {
        console.error('Failed to fetch blog posts', error);
      } finally {
        setLoading(false);
      }
    }

    if (blogId) {
      loadPosts();
    }
  }, [blogId]);

  return (
    <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
      <div className="page-center">
        <div className={Styles.blogpost_container}>
          {loading ? (
            <p>Loading...</p>
          ) : posts.length > 0 ? (
            posts.map((post, index) => (
              <div key={index} className={Styles.blog_card}>
                {post.featuredImage?.url && (
                  <img
                    src={post.featuredImage.url}
                    alt={post.featuredImage.alt || post.name}
                    className={Styles.blog_image}
                  />
                )}
                <h2 className={Styles.blog_title}>
                  <a href={post.absoluteUrl} target="_self" rel="noopener noreferrer">
                    {post.name}
                  </a>
                </h2>
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
