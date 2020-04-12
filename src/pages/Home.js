import React, { Fragment, useContext, useEffect } from 'react';
import Form from '../components/Form';
import NotesList from '../components/NotesList';
import FirebaseContext from '../context/firebase/firebaseContext';
import Loader from '../components/Loader';

const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext);

  useEffect(() => {
    fetchNotes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <Form />
      <hr />
      {loading ? <Loader /> : <NotesList notes={notes} onRemove={removeNote} />}
    </Fragment>
  )
};

export default Home;