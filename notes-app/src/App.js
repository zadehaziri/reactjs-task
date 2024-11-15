import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import CategoryList from './components/CategoryList';  // Import the CategoryList
import NotesList from './components/NotesList';  // Import the NotesList
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <Container fluid className="" style={{ backgroundColor: '#F5F5F7' }}>
        <Row noGutters>
          <Col xs={3} className="p-2">
            <Sidebar className="bg-white" />
          </Col>
          <Col xs={9} className="p-2">
            <Routes>
              <Route path="/" element={<MainContent />} />
              <Route path="/category/:categoryName" element={<NotesList />} /> {/* Add Route for NotesList */}
            </Routes>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
