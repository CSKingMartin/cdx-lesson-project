// index.js
import css from './styles.css';
import React from 'react';

const Drawer = (props) => {
  const {
    children,
    ...rest
  } = props;

  /* State Notes:
    - open / closed ✅
    - something to change whether open / close
    - some way of using that state

    What is UseEffect?

    - lifecycle function that runs everytime something changes
    in our component.
  */

  const drawerContent = React.useRef(null);

  const [isOpen, toggleDrawer] = React.useState(false);

  const openClass = !isOpen && css.closed;

  const array = [css.inner, openClass].join(' ');

  const contentHeight = isOpen ? drawerContent.current.clientHeight : 0;

  return (
    <div className="Drawer" {...rest}>
      <div className={array} style={drawerContent.current && { height: `${contentHeight}px` }}>
        <div
          ref={drawerContent}
          id="Drawer-content"
        >
          {children}
        </div>
      </div>
      <button onClick={() => toggleDrawer(!isOpen)}>
        {isOpen ? 'Close Drawer' : 'Open drawer'}
      </button>
    </div>
  )
};

export default Drawer;
