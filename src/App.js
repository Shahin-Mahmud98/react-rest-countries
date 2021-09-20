// import logo from './logo.svg';
import './App.css';
import Countries from './Component/Countries/Countries';
import Header from './Component/Countries/Header';
// import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {/* <Countries></Countries> */}
      <Countries></Countries>
      <Header></Header>
    </div>
  );
}



















// component declare
// function Countries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch('https://restcountries.eu/rest/v2/all')
//       .then(res => res.json())
//       .then(data => setCountries(data));
//   }, [])
//   return (
//     <div>
//       <h1>Hello yo yo mama rest countries to your world</h1>
//       <h5>Countries Available : {countries.length}</h5>
//       {
//         countries.map(country => <Country name={country.name} capital={country.capital}></Country>)
//       }

//     </div>
//   )
// }
// function Country(props) {
//   return (
//     <div>
//       <h1>Name : {props.name}</h1>
//       <p>Capital : {props.capital}</p>
//     </div>
//   )
// }

export default App;
