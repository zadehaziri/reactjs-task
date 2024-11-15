import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import CategoryList from './CategoryList'; // Import the CategoryList component

function Sidebar() {
  const [showInput, setShowInput] = useState(false);
  const [categories, setCategories] = useState({});
  const [newCategoryName, setNewCategoryName] = useState(''); // State for the new category name

  // Toggle the visibility when the "Create Category" button is clicked
  const handleCreateCategoryClick = () => {
    setShowInput(!showInput);
  };

  // Function to update categories
  const updateCategories = (newCategory) => {
    setCategories((prevCategories) => {
      return { ...prevCategories, ...newCategory };
    });
  };

  const handleSaveCategory = () => {
    if (newCategoryName.trim() !== '') {
      const newCategory = {};
      newCategory[newCategoryName] = [];


      setCategories((prevCategories) => {
        const updatedCategories = { ...prevCategories, [newCategoryName]: [] };
        return updatedCategories;
      });

      setNewCategoryName('');
      setShowInput(false);
    } else {
      alert('Please enter a category name.');
    }
  };

  const handleCancelCategory = () => {
    setNewCategoryName('');
    setShowInput(false);
  };

  useEffect(() => {

    const fetchCategories = async () => {
      try {
        const response = await fetch('/data.json');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="bg-white sidebar p-3 vh-100" style={{ borderRadius: '10px' }}>
      {!showInput && (
        <div className="position-relative">
          <button
            className="btn d-flex justify-content-center align-items-center p-2 mb-2 w-100 text-white"
            style={{ backgroundColor: '#71CF48' }}
            onClick={handleCreateCategoryClick}
          >
            <span>Create Category</span>
            <span
              className="position-absolute text-white d-flex align-items-center justify-content-center"
              style={{
                top: '50%',
                right: '10px',
                height: '100%',
                transform: 'translateY(-50%)',
                borderLeft: '2px solid #68C142',
                paddingLeft: '10px',
              }}
            >
              <i className="fas fa-plus"></i>
            </span>
          </button>
        </div>
      )}

      {/* Conditionally render the input field */}
      {showInput && (
        <div className="d-flex align-items-center">
          <input
            type="text"
            className="form-control me-2"
            style={{ width: '276px', backgroundColor: '#F5F5F7' }}
            placeholder="Add a category name..."
            value={newCategoryName} // Controlled input
            onChange={(e) => setNewCategoryName(e.target.value)} // Update category name state
          />
          <button
            className="btn me-2 text-white"
            style={{ width: '40px', height: '40px', backgroundColor: '#71CF48' }}
            onClick={handleSaveCategory} // Save category
          >
            <i className="fas fa-check"></i>
          </button>
          <button
            className="btn text-white"
            onClick={handleCancelCategory} // Cancel category creation
            style={{ width: '40px', height: '40px', backgroundColor: '#FE4C4A' }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      )}

      {/* Render the CategoryList component and pass the categories as a prop */}
      <CategoryList categories={categories} />
    </div>
  );
}

export default Sidebar;
