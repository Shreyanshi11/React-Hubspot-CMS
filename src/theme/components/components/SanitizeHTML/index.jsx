import React from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

function SanitizeHTML({ content }) {
  if (!content) return null;

  const cleanContent = DOMPurify.sanitize(content);
  return <>{parse(cleanContent)}</>;
}

export default SanitizeHTML;
