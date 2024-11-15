import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function NotesList() {
  const { categoryName } = useParams();
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        if (data[categoryName]) {
          setNotes(data[categoryName]);
        } else {
          setNotes([]);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [categoryName]);

  const handleNoteClick = (note) => {
    setSelectedNote(note); // Set the selected note when clicked
  };

  const handleCreateNote = () => {
    setSelectedNote({
      title: '',
      note: ''
    }); // Reset selectedNote to an empty note for creating a new one
  };

  const filteredNotes = notes.filter(
    (note) => note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = () => {
    if (selectedNote) {
      // Filter out the selected note from the notes array
      const updatedNotes = notes.filter((note) => note !== selectedNote);
      setNotes(updatedNotes);
      setSelectedNote(null); // Clear the selected note after deletion
    }
  };

  const handleSave = () => {
    if (selectedNote) {
      // If the note already exists, update it, otherwise add a new note
      const updatedNotes = notes.map((note) =>
        note === selectedNote ? { ...selectedNote } : note
      );

      if (!updatedNotes.includes(selectedNote)) {
        // If it's a new note, add it to the array
        updatedNotes.push(selectedNote);
      }

      setNotes(updatedNotes);
    }
  };

  return (
    <div className="d-flex vh-100 bg-white" style={{ gap: '15px', borderRadius: '10px' }}>
      <div className={selectedNote ? 'col-4' : 'col-12'} style={{ backgroundColor: '#ffffff', borderRadius: '10px' }}>
        <div className="d-flex align-items-center mb-3">
          <div className="position-relative p-2">
            <button
              className="btn d-flex justify-content-center align-items-center p-2 mb-2 text-white"
              style={{ backgroundColor: '#71CF48', width: '12rem' }}
              onClick={handleCreateNote} // Clicking this will reset the right side to empty fields
            >
              <span>Create Note</span>
              <span
                className="position-absolute text-white d-flex align-items-center justify-content-center"
                style={{
                  right: '15px',
                  height: '50%',
                  borderLeft: '2px solid #68C142',
                  paddingLeft: '10px',
                }}
              >
                <i className="fas fa-plus"></i>
              </span>
            </button>
          </div>
          <input
            type="text"
            className="form-control ms-2"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ maxWidth: '300px' }}
          />
        </div>

        {filteredNotes.length > 0 ? (
          <ul className="pl-2">
            {filteredNotes.map((note, index) => (
              <li
                key={index}
                className="list-group-item cursor-pointer"
                onClick={() => handleNoteClick(note)} // Set the clicked note to selectedNote
              >
                <p className="fw-bold mb-0">{note.title}</p>
                <p>{note.note.length > 150 ? note.note.slice(0, 150) + '...' : note.note}</p>
                <hr />
              </li>
            ))}
          </ul>
        ) : (
          <p>No notes available.</p>
        )}
      </div>

      {/* Right side section */}
      <div className="col-8 p-4 p-2" style={{ backgroundColor: '#ffffff' }}>
        {/* Top section with badges */}
        <div className="d-flex justify-content-between mb-4">
          {/* Left side labels */}
          <div className="d-flex">
            <span
              className="badge"
              style={{
                backgroundColor: '#1264A3',
                width: '120px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Left label */}
            </span>
            <span
              className="badge ms-2"
              style={{
                backgroundColor: '#1264A3',
                width: '120px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Middle label */}
            </span>
            <span
              className="badge ms-2"
              style={{
                backgroundColor: '#71CF48',
                width: '120px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Right label */}
            </span>
          </div>

          {/* Right side labels */}
          <div className="d-flex">
            <span
              className="badge"
              style={{
                backgroundColor: '#1264A3',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Small icon */}
            </span>
            <span
              className="badge ms-2"
              style={{
                backgroundColor: '#1264A3',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Another small icon */}
            </span>
            <span
              className="badge ms-2"
              style={{
                backgroundColor: '#1264A3',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* Another small icon */}
            </span>
          </div>
        </div>

        {/* Title Input */}
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter note title"
            value={selectedNote ? selectedNote.title : ''}
            onChange={(e) => setSelectedNote({ ...selectedNote, title: e.target.value })}
            style={{ border: 'none' }}
          />
        </div>

        {/* Divider */}
        <div style={{ borderBottom: '1px solid #EFEFEF', marginBottom: '1rem' }}></div>

        {/* Note Body */}
        <div className="mb-3">
          <textarea
            className="form-control"
            rows="29"
            placeholder="Write your note here..."
            value={selectedNote ? selectedNote.note : ''}
            onChange={(e) => setSelectedNote({ ...selectedNote, note: e.target.value })}
            style={{ border: 'none' }}
          />
        </div>

        {/* Action buttons */}
        <div className="d-flex justify-content-between mt-4">
          <button
            className="btn text-white d-flex align-items-center justify-content-between"
            onClick={handleDelete}
            style={{
              backgroundColor: '#FE4C4A',
              border: 'none',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              width: '200px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            Delete Note
            <span
              className="d-flex align-items-center justify-content-center"
              style={{
                borderLeft: '2px solid #EB4345',
                paddingLeft: '10px',
                marginLeft: '10px',
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </span>
          </button>

          <button
            className="btn text-white d-flex align-items-center justify-content-between"
            onClick={handleSave}
            style={{
              backgroundColor: '#71CF48',
              border: 'none',
              padding: '0.75rem 1.5rem',
              fontSize: '1rem',
              width: '200px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            Save Changes
            <span
              className="d-flex align-items-center justify-content-center"
              style={{
                borderLeft: '2px solid #68C142',
                paddingLeft: '10px',
                marginLeft: '10px',
              }}
            >
              <i className="fas fa-check"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotesList;
