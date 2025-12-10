import React from "react";
import AddIcon from '@mui/icons-material/Add';
import CheckIcon from '@mui/icons-material/Check';

function CreateArea({ onAddOrEdit, editingNote }) {
  const [note, setNote] = React.useState({ title: "", content: "" });

  React.useEffect(() => {
    if (editingNote) {
      setNote(editingNote);
    }
  }, [editingNote]);

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({ ...prevNote, [name]: value }));
  }

  function submitNote(event) {
    event.preventDefault();
    onAddOrEdit(note);
    setNote({ title: "", content: "" });
  }

  return (
    <form className="create-note" onSubmit={submitNote}>
      <input
        name="title"
        placeholder="Title"
        value={note.title}
        onChange={handleChange}
      />
      <textarea
        name="content"
        placeholder="Take a note..."
        value={note.content}
        onChange={handleChange}
        rows={note.title || note.content ? 3 : 1}
      />
      <button type="submit">
        {editingNote ? <CheckIcon /> : <AddIcon />}
      </button>
    </form>
  );
}
export default CreateArea;