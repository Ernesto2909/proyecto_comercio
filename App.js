import logo from './logo.svg';
import data from './data';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  const openMenu=()=>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu=()=>{
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="header">
      <div className="brand">
        <button  onClick={openMenu}>
          &#9776;
        </button>
        <Link to="/">ErazoCommerce</Link>
        
      </div>
      <div className="header-links">
        <a href="cart.html">Carrito de compra</a>
        <a href="signin.html">Ingresar al sitio</a>
      </div>
    </header>
    <aside className="sidebar">
      <h3>Categorias</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>x</button>
      <h4>Hombres</h4>
      <ul>
        <li>
          <a href="hombre.html">Pantalones/Jeans</a>
        </li>

        <li>
          <a href="hombre.html">Camisas</a>
        </li>

      </ul>
      <h4>Mujeres</h4>
      <ul>
        <li>
          <a href="femenino.html">Pantalones/Jeans</a>
        </li>

        <li>
          <a href="femenino.html">Camisas</a>
        </li>

      </ul>
      <h4>Niños/as</h4>
      <ul>
        <li>
          <a href="niños.html">Pantalones/Jeans</a>
        </li>

        <li>
          <a href="niños.html">Camisas</a>
        </li>

      </ul>
    </aside>
    <main className="main">
      <div className="content">
        <Route path="/products/:id" component={ProductScreen}/>
        <Route path="/" exact={true} component={HomeScreen}/>
        
      </div>

    </main>
    <footer className="footer">
     
      <a  href="nosotros.html">sobre nosotros</a>
      <a href="">Facebook</a>
      <a href="">Instagram</a>
    </footer>
  </div>
  </BrowserRouter>
  );
}

export default App;
