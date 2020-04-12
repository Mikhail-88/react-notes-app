import React, { useContext } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import AlertContext from '../context/alert/alertContext';

const NotesList = ({ notes, onRemove }) => {
  const alert = useContext(AlertContext);

  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map(note => (
        <CSSTransition 
          key={note.id}
          classNames='note'
          timeout={750}
        >
          <li className="list-group-item note">
            <strong>{note.title}</strong>
            <span>{note.date}</span>
            <button 
              type="button" 
              className="btn btn-outline-danger btn-sm"
              onClick={() => {
                onRemove(note.id);
                alert.show('Note has been deleted', 'danger');
              }}
            >
              Delete
            </button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default NotesList;