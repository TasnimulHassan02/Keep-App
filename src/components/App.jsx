import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

 const [noteArray, setNoteArray] = React.useState([]);
 const [editingId, setEditingId] = React.useState(null);

  function addOrEditNote(newNote) {
    if (editingId !== null) {
      setNoteArray(prevNotes =>
        prevNotes.map((note, index) =>
          index === editingId ? newNote : note
        )
      );
      setEditingId(null);
    } else {

      setNoteArray(prevNotes => [...prevNotes, newNote]);
    }
  }


 function deleteNote(id) {
   setNoteArray(prevNotes => {
     return prevNotes.filter((noteItem, index) => {
       return index !== id;
     });
   });
 }

 function editNote(id) {
    setEditingId(id);
  }


  return (
    <div>
      <Header />
      <CreateArea
        onAddOrEdit={addOrEditNote}
        editingNote={editingId !== null ? noteArray[editingId] : null}
/>

      {noteArray.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
            onEdit={editNote}
          />
        );
      }) }
      <Footer />
    </div>
  );
}

export default App;
