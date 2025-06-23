import {
    useState,
    useRef,
    useEffect,
    useCallback,
    useMemo,
  } from 'react';
  import MenuItemComponent from './MenuItemComponent.jsx';
  import { getAlignmentFieldCss } from '../../utils/style-fields.jsx';
import { logInfo } from '@hubspot/cms-components';
  
  function MenuComponent(props) {
    const {
      menuDataArray,
      flow = 'vertical',
      menuAlignment,
      navigationAriaLabel = '',
      flyouts,
      isMobileMenu,
      triggeredMenuItems,
      setTriggeredMenuItems,
      linkStyleVariant,
      additionalClassArray,
      ...rest
    } = props;
    
    
    const isFirstRender = useRef(true);
    const [triggerHandleKeydown, setTriggerHandleKeydown] = useState(false);
    const [currentKeyboardEvent, setCurrentKeyboardEvent] = useState(null);
    const [currentKeyboardElementId, setCurrentKeyboardElementId] = useState('');
    const [focusedItem, setFocusedItem] = useState(null);
    const [visibleMenuItems, setVisibleMenuItems] = useState([]);
    const menuItemRefs = useRef([]);
    const linkRefs = useRef({});
    const navRef = useRef(null);
  
    const visibleMenuItemsController = {
      visibleMenuItems,
      setVisibleMenuItems,
    };
  
    useEffect(() => {
      if (isFirstRender.current) {
        isFirstRender.current = false;
        return;
      }
  
      const arrowKeyMap = {
        ArrowDown: () =>
          setVisibleMenuItems((currentArray) => [
            ...currentArray,
            currentKeyboardElementId,
          ]),
        ArrowUp: () =>
          setVisibleMenuItems((currentArray) => {
            const idAsArray = currentKeyboardElementId.split('-');
            idAsArray.pop();
            const idStringToRemove = idAsArray.join('-');
            return currentArray.filter((item) => item !== idStringToRemove);
          }),
      };
  
      if (currentKeyboardEvent?.key in arrowKeyMap) {
        arrowKeyMap[currentKeyboardEvent.key]();
      }
  
      setTriggerHandleKeydown((prevState) => !prevState);
    }, [currentKeyboardEvent, currentKeyboardElementId]);
  
    useEffect(() => {
      handleKeydown(currentKeyboardEvent, currentKeyboardElementId);
    }, [triggerHandleKeydown]);
  
    function resetVisibleMenuItems() {
      setVisibleMenuItems([]);
    }
  
    const keyboardEventCallback = useCallback((event, elementId) => {
      if (event.key === 'Tab') {
        resetVisibleMenuItems();
        return;
      }
      event.stopPropagation();
      event.preventDefault();
      setCurrentKeyboardEvent(event);
      setCurrentKeyboardElementId(elementId);
    }, []);
  
    const handleKeydown = (e, currentElementId) => {
      if (!e?.key) return;
      const targetKeys = new Set([
        'ArrowUp',
        'ArrowDown',
        'ArrowLeft',
        'ArrowRight',
        'Space',
        'Escape',
      ]);
      const key = e.key === ' ' ? 'Space' : e.key;
      if (!targetKeys.has(key)) return true;
  
      const idArray = currentElementId.split('-');
      const idArrayParentLevel = idArray.slice(0, -1);
      const idArrayLastNumber = parseInt(idArray[idArray.length - 1]);
      const isNavElementFocused = idArray[0] === '';
      const isNavElementFocusedAndArrowDown = isNavElementFocused && key === 'ArrowDown';
  
      function findNextSibling() {
        const nextSiblingNumber = idArrayLastNumber + 1;
        const idArrayParentLevelCopy = [...idArrayParentLevel, nextSiblingNumber.toString()];
        const nextSiblingId = idArrayParentLevelCopy.join('-');
        return linkRefs.current[nextSiblingId] || linkRefs.current[[...idArrayParentLevel, 0].join('-')];
      }
  
      function findPreviousSibling() {
        const previousSiblingNumber = idArrayLastNumber - 1;
        const idArrayParentLevelCopy = [...idArrayParentLevel, previousSiblingNumber.toString()];
        const previousSiblingId = idArrayParentLevelCopy.join('-');
        const previousSiblingElement = linkRefs.current[previousSiblingId];
  
        if (!previousSiblingElement) {
          const parentIdToMatch = idArrayParentLevel.length > 0
            ? `${idArrayParentLevel.join('-')}-`
            : null;
          const filteredSiblingsArray = Object.keys(linkRefs.current).filter((item) => {
            if (parentIdToMatch === null) return !item.includes('-');
            return item.startsWith(parentIdToMatch) &&
              item.split('-').length === parentIdToMatch.split('-').length;
          });
          const lastSibling = filteredSiblingsArray[filteredSiblingsArray.length - 1];
          return linkRefs.current[lastSibling];
        }
  
        return previousSiblingElement;
      }
  
      function findChild() {
        idArray.push('0');
        const potentialChildId = idArray.join('-');
        return linkRefs.current[potentialChildId] || linkRefs.current[currentElementId];
      }
  
      function findParent() {
        idArray.pop();
        if (idArray.length === 0) return linkRefs.current[currentElementId];
        return linkRefs.current[idArray.join('-')];
      }
  
      const keyActions = {
        Escape: () => {
          resetVisibleMenuItems();
          if (navRef.current) {
            navRef.current.tabIndex = 0;
            navRef.current.focus();
          }
        },
        Space: () => {
          const currentElement = linkRefs.current[currentElementId];
          if (currentElement) currentElement.click();
        },
        ArrowUp: () => findParent()?.focus(),
        ArrowDown: () => findChild()?.focus(),
        ArrowLeft: () => findPreviousSibling()?.focus(),
        ArrowRight: () => findNextSibling()?.focus(),
      };
  
      if (isNavElementFocusedAndArrowDown) linkRefs.current['0']?.focus();
      if (isNavElementFocused) return;
      keyActions[key]?.();
    };
  
    const handleFocus = useCallback((e, key) => {
      e.stopPropagation();
      setFocusedItem(key);
    }, []);
  
    const handleBlur = useCallback(() => {
      setFocusedItem(null);
    }, []);
  
    const a11yController = useMemo(() => ({
      handleFocus,
      handleBlur,
      focusedItem,
      keyboardEventCallback,
      menuItemRefs,
      linkRefs,
    }), [handleFocus, handleBlur, focusedItem, keyboardEventCallback, menuItemRefs, linkRefs]);
  
    const flowClasses = {
      horizontal: 'menu--horizontal',
      vertical: 'menu--vertical',
    };
  
      const additionalClasses = additionalClassArray ? additionalClassArray?.join(' ') : '';

    const MenuClasses = `menu ${flowClasses[flow]} ${
    isMobileMenu ? 'menu--mobile' : 'menu--desktop'
    } ${additionalClasses}`;

  
    const listStyles = {
      padding: 0,

    };
  
    return (
      <nav
        tabIndex={0}
        ref={navRef}
        onKeyDown={(e) => handleKeydown(e, '')}
        aria-label={navigationAriaLabel}
      >
        <ul
          role="menu"
          className={MenuClasses}
          style={isMobileMenu ? {} : { ...getAlignmentFieldCss(menuAlignment), ...listStyles }}
        >
          {menuDataArray.map((item, index) => (
            <MenuItemComponent
              key={index.toString()}
              menuData={item}
              idString={index.toString()}
              a11yController={a11yController}
              flyouts={flyouts}
              keyboardEventCallback={keyboardEventCallback}
              visibleMenuItemsController={visibleMenuItemsController}
              isMobileMenu={isMobileMenu}
              triggeredMenuItems={triggeredMenuItems}
              setTriggeredMenuItems={setTriggeredMenuItems}
              linkStyleVariant={linkStyleVariant}
              {...rest}
            />
          ))}
        </ul>
      </nav>
    );
  }
  
  export default MenuComponent;
  