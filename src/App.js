import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import products from './Products';
import { v4 as uuidv4 } from 'uuid';
function App() {
  // const [p] = products;

  console.log(uuidv4());
  return (

    <div className="App">
      {/* <Home test={p} /> */}
      {
        products.map(product => <Home key={uuidv4()} product={product}></Home>)

      }
    </div>
  );
}

export default App;
