import './App.css';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <div className="app">
      <Router>
        <Header />

        <Switch>

          <Route path="/search">
            <SearchPage />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
