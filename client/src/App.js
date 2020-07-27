import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
 const [job, setJob] = useState({ 
	 name: '', 
	 description: '' 
 });
 const apiUrl = 'http://localhost:4000/vagas';

 const saveJob = (e) => {
	e.preventDefault();
	const data = {
		name: job.name,
		description: job.description
	}
	axios.post(apiUrl, data)
 }

 const onChange = (e) => {
	  const { name, value } = e.target;
	  setJob({...job, [name]: value});
  }

  return (
    <div className="App">
      <header className="App-header">
	  <form onSubmit={saveJob}>
	  	<input type="text" name="name" id="name" placeholder="Name Job" value={job.name} onChange={onChange} />
	  	<input type="text" name="description" id="description" value={job.description} onChange={onChange} />
	  	<button type="submit">
	  		save
	  	</button>
	  </form>

      </header>
    </div>
  );
}

export default App;
