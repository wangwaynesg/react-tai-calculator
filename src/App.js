import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import TaiCalculator from './components/TaiCalculator'
import Results from './components/Results'
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [zimo, setZimo] = useState(false);
  const [price, setPrice] = useState(0);


  const calculate = (data) => {
    setZimo(data.zimo);
    setPrice(data.price);
  }

  return (
    <Router>
    <div className="container">
      <Header title='Tai Calculator'/>
      <Route path ='/' exact render={(props) => (
        <>
          <TaiCalculator calculate={calculate}/>
          <Results zimo={zimo} price={price}/>
        </>
      )}/>
      
      <Route path='/about' component={About} />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
