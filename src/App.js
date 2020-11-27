import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';

function App() {
  return (
    <div classname="row">
      <div classname="col-md-8 offset-md-2">
        <Contacts></Contacts>
      </div>
    </div>
  );
}

export default App;
