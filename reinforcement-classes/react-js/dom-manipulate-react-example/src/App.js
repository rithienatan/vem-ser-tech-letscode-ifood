import logo from './logo.svg';
import './App.css';

function App() {
  const myArray = [1, 2, 3, 4, 5];

  return (
    <div>
      <ul>
        {myArray.map(element => <li>{element}</li>)}
      </ul>
    </div>
  );
}

export default App;
