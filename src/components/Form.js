import React, { useState, useContext } from 'react';
import AlertContext from '../context/alert/alertContext';
import FirebaseContext from '../context/firebase/firebaseContext';

const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = event => {
    event.preventDefault();

    if (value.trim()) {
      firebase.addNote(value.trim()).then(() => {
        alert.show('Note added', 'success');
      }).catch(() => {
        alert.show('Something went wrong', 'danger');
      });

      setValue('');
    } else {
      alert.show('Please, enter your note');
    }
  }

  return (
    <form className="mt-4" onSubmit={submitHandler}>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Enter your note"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
      </div>
    </form>
  );
};

export default Form;