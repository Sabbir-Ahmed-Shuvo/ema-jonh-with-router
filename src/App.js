import './App.css';
import Header from './components/Header/Header';
import Invantory from './components/Invantory/Invantory';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Shop></Shop>
      <Invantory></Invantory>
    </div>
  );
}

export default App;
