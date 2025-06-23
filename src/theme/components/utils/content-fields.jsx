// Links
export function getLinkFieldHref(fieldValue) {
    if (!fieldValue || !fieldValue.url) return;
  
    const linkHref = fieldValue.url.href;
    const linkType = fieldValue.url.type;
  
    const hrefMap = {
      EMAIL_ADDRESS: `mailto:${linkHref}`,
      PAYMENT: `${linkHref}?referrer=CMS_MODULE_NEWTAB`,
    };
  
    return hrefMap[linkType] || linkHref;
  }
  
  export function getLinkFieldRel(fieldValue) {
    const relValues = [];
  
    if (fieldValue && fieldValue.open_in_new_tab) {
      relValues.push('noopener', 'noreferrer');
    }
    if (fieldValue && fieldValue.no_follow) {
      relValues.push('nofollow');
    }
    return relValues.join(' ');
  }
  
  export function getLinkFieldTarget(fieldValue) {
    if (!fieldValue) return '';
  
    return fieldValue.open_in_new_tab ? '_blank' : '';
  }
  
  export function setAriaLabel(linkType) {
    switch (linkType) {
      case 'EXTERNAL':
        return 'Open content external';
      case 'CONTENT':
        return 'Open content content';
      case 'FILE':
        return 'Open content file';
      case 'EMAIL_ADDRESS':
        return 'Open content email';
      case 'BLOG':
        return 'Open content blog';
      case 'PAYMENT':
        return 'Open content payment';
      default:
        return 'Open content default';
    }
  }