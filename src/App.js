import './App.css';
import etsy from './data/etsy';
import Listing from './components/Listing';

function App() {
  return (
    <div className="App">
      <Listing items={etsy}/>
    </div>
  );
}

export default App;