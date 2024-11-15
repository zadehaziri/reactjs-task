# Flex Business Solutions Tech Test

This project is a notes app built with React. It allows users to:
- Create new notes
- Show all notes
- Search and filter notes

## Project Structure
- **src/**: Contains the main source code
- **public/**: Static assets like `index.html`
- **screenshots/**: Screenshots of the finished app

## Screenshots
Here are some screenshots of the finished app:

### 1. Main Page with All Notes
![Main Page](screenshots\Notes.png)

### 2. Create New Note
![Create Note](screenshots\Notes.png)

### 3. Search Notes
![Search Notes](screenshots\search-notes.png)

## How to Run the App
cd reactjs-interview-task
cd notes-app
npm install
npm start

Open your browser and go to http://localhost:3000 to view the app

### Prerequisites
- Node.js and npm installed on your system

### Instructions
1. **Clone the repository**:
   ```bash
   git clone https://github.com/zadehaziri/reactjs-interview-task


### Features

Create Notes: Add new notes using a simple form.

View All Notes: Display a list of all saved notes.

Search Notes: Use the search bar to filter notes based on your input.

### Technologies Used
React: JavaScript library for building user interfaces

CSS: For styling the components

Axios: For fetching data 

Jest: For unit testing

###  How to Run Tests

To run unit tests, use the following command:

npm test


### Questions and Answers
1. How might you make this app more secure?

- Input Validation: Ensure all inputs are sanitized to prevent XSS (Cross-Site Scripting) attacks.
- Authentication: Implement user authentication to restrict access to authorized users only.
- Environment Variables: Store sensitive information like API keys in .env files.
- Rate Limiting: Add rate limiting to APIs to prevent abuse and DDoS attacks.


2. How would you make this solution scale to millions of records?

- Pagination or Infinite Scrolling: Load data in chunks to reduce the initial load time.
- Database Optimization: Use indexing and query optimization for faster data retrieval.
- Load Balancing: Use load balancers to distribute traffic across multiple servers.
- loud Services: Utilize cloud platforms (like AWS, Azure) for scalable infrastructure.


### License
This project is licensed under the MIT License.


### Author
- Zahide Haziri
- LinkedIn Profile: www.linkedin.com/in/zahide-haziri-30414b260