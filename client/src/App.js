import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';


function App() {
  const [users, setUsers] = useState([]);

  /*
  const fetchUsers = async () => {
	  let result = await axios('http://localhost:4000');
	  setUsers(result.data);
  }
  */

  useEffect(() => {
	const fetchData = async () => {
	  let result = await axios('http://localhost:4000');
	  setUsers(result.data);
	};
	
	fetchData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
	  {users.map((user, index) => (
		  <ul key={index}>
			  <li>{user.name}</li>
			  <p>{user.age}</p>
		  </ul>
	  ))}
      </header>
    </div>
  );
}

export default App;
