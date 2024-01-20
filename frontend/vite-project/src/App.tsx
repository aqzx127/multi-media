import './index.css'
import { useEffect } from 'react';

function App() {
  
  const testBackend = () => {
    fetch("http://127.0.0.1:8000/test/") // Replace with your Django server URL
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  };
  
  // Call this function on component mount or button click
  useEffect(() => {
    testBackend();
  }, []);
  

  return (
    <>
      <h1>Boilerplate</h1>
      <button onClick={testBackend}>Submit</button>
    </>
  )
}

export default App;
