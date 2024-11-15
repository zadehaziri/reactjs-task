import React, { useState } from 'react';

function MainContent() {
  // State to manage title and note input
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleNoteChange = (e) => setNote(e.target.value);

  return (
    <div className="main-content p-4 bg-white vh-100" style={{ borderRadius: '10px' }}>
      {/* Labels Section */}
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
          </span>
        </div>
      </div>

      {/* Add a title input */}
      <div className="mb-3">
        <input
          type="text"
          id="noteTitle"
          className="form-control"
          placeholder="Add a title"
          value={title}
          onChange={handleTitleChange}
          style={{ border: "none" }}
        />
      </div>

      {/* Divider */}
      <div style={{ borderBottom: '1px solid #EFEFEF', marginBottom: '1rem' }}></div>

      {/* Write your note input */}
      <div className="mb-3">
        <textarea
          id="noteBody"
          className="form-control"
          rows="6"
          placeholder="Write your note here..."
          value={note}
          onChange={handleNoteChange}
          style={{ border: "none" }}
        />
      </div>

    </div>
  );
}

export default MainContent;
