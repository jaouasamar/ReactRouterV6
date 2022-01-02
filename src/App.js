
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Product from './product/Product';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Header from './header/Header';
import Home from './home/Home';
function App() {
  const products=[
    {
      imgSrc:
        "https://th.bing.com/th/id/R.b38f3ea1f155faaef14f344bf74b8b15?rik=ctrnYHfKX3k6zw&pid=ImgRaw&r=0",
      name: "AirPods",
      price: "6,99 $",
    },
    {
      imgSrc: "https://th.bing.com/th/id/R.62443f7dda859823cf5b5772396bbf09?rik=HzaWElpDeJ22fg&pid=ImgRaw&r=0",
      name: "Smart watch",
      price: "8,64 $",
    },
    {
      imgSrc:
        "https://saligon.com/wp-content/uploads/2020/09/Iphone-11-pro-max-grey-2.jpg",
      name: "Iphone 11 ",
      price: "150 $",
    }
  ]
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product products={products}/>}/>
         
        </Routes>
        </Router>
     {/* <Product products={products}/> */}
    </div>
  );
}

export default App;
