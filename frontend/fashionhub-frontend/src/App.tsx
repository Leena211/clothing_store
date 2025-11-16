import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Category from './pages/Category';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './styles/globals.css';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product/:id" component={Product} />
        <Route path="/category/:id" component={Category} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;