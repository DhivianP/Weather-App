import "../styles/App.css";
import React from 'react';
import LocationDetails from './LocationDetails';

function App(props) {
  const { location } = props;
  return (
    <div className="App">
      <LocationDetails city={location.city} country={location.country} />
    </div>
  );
};

export default App;
