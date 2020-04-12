import React, { useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import { CSSTransition } from 'react-transition-group';

const Alert = () => {
  const { alert, hide }  = useContext(AlertContext);

  return (
    <CSSTransition 
      in={alert.visible} 
      timeout={{
        enter: 500,
        exit: 350
      }} 
      classNames='alert'
      mountOnEnter
      unmountOnExit
    >
      <div className={`alert alert-${alert.type || 'warning'} alert-dismissible mt-4`}>
        <strong>Attention! </strong>
          {alert.text}
        <button onClick={hide} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </CSSTransition>
  );
};

export default Alert;