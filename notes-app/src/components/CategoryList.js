import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CategoryList(categories) {
  const [categories1, setCategories1] = useState({});
  const [expandedCategory, setExpandedCategory] = useState(null);

  useEffect(() => {
    // Fetch data from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setCategories1(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <ul className="list-unstyled p-2">
      {Object.entries(categories.categories).map(([category, notes], index) => (
        <li key={index} className="p-2 bg-primary text-white mb-2 rounded">
          <Link to={`/category/${category}`} className="text-white" style={{ textDecoration: 'none' }}>
            <div
              className="d-flex justify-content-between align-items-center cursor-pointer"
              onClick={() => toggleCategory(category)}
            >
              <div>
                <i className="fas fa-folder me-2"></i> {/* Folder Icon */}
                <span className="text-white">{category}</span>
              </div>
              <i className={`fas fa-chevron-${expandedCategory === category ? 'right' : 'down'} ms-2`}></i> {/* Toggle Arrow Icon */}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default CategoryList;
