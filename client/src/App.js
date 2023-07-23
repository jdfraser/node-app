import React from 'react';
import logo from './logo.svg';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button variant="contained">{!data ? 'Loading...' : data}</Button>
      </header>
    </div>
  );
}

export default App;
