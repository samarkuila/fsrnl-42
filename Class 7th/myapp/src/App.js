import logo from './logo.svg';
import './App.css';
import './index'

function App(image,heading,description) {
  return (
    <div className="app">
      {image}
      {heading}
      {description}
    </div>  
  );
}

export default App;
