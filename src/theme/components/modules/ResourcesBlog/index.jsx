import React from 'react';
import { logInfo } from '@hubspot/cms-components';
import HeadingComponent from '../../components/HeadingComponent/HeadingComponent.jsx';
import ResponsiveSpacingWrapper from '../../components/SpacingStyleComponent/ResponsiveSpacingWrapper.jsx';
import Styles from '../ResourcesBlog/Resourcesblog.module.css';

export function Component(props) {
const { hublData,
        heading_group:{
            headingAndTextHeadingLevel,
            headingAndTextHeading,
            headingStyleVariant
        },
} = props;
const posts = hublData?.blogPosts || [];

logInfo(posts, 'Resources Blog Module');

return (
    <ResponsiveSpacingWrapper moduleId={props?.module?.module_id} fields={props?.fieldValues}>
        <div className="page-center">
            <div className={Styles.heading_container}>
                 {headingAndTextHeading && (
                <HeadingComponent headingLevel={headingAndTextHeadingLevel} headingStyleVariant={headingStyleVariant} heading={headingAndTextHeading} />
              )}
            </div>
        <div className={Styles.blog_grid}>
            {posts.length > 0 ? (
            posts.map((post, index) => (
                <div className={Styles.three_col_card} key={index}>
                {post.featuredImage && (
                    <img
                    src={post.featuredImage}
                    alt={post.altText || 'Blog featured image'}
                    width={post.featuredImageWidth || 'auto'}
                    height={post.featuredImageHeight || 'auto'}
                    />
                )}
                <h5>{post.title}</h5>
                <div
                    className={Styles.blog_summary}
                    dangerouslySetInnerHTML={{ __html: post.summary }}
                />
                <a href={post.url} className='button--simple'>Read More</a>
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

export const hublDataTemplate = `
{% set blog_post_ids = [] %}
{% set blog_posts = [] %}

{% if module.blog %}
{% set contents = blog_recent_posts(module.blog, 3) %}
{% for post in contents %}
{% do blog_post_ids.append(post.id) %}
{% set temp_post = {
    id: post.id,
    title: post.name,
    url: post.absolute_url,
    featuredImage: post.featured_image,
    altText: post.featured_image_alt_text,
    summary: post.post_summary|truncate(150, True, '...'),
    publishDate: post.publish_date is defined and post.publish_date ? post.publish_date|datetimeformat('%Y-%m-%d') : '',
    topicNames: post.topic_list is iterable ? post.topic_list : [],
    body: post.body
} %}
{% do blog_posts.append(temp_post) %}
{% endfor %}
{% endif %}

{% set hublData = {
blogPosts: blog_posts,
blogPostIds: blog_post_ids
} %}
`;

export { fields } from './fields.jsx';

export const meta = {
label: 'Resources Blog Module',
};
