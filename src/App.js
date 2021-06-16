import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

import NavBar from './components/NavBar';
import HomePage from './pages/HomePage'
import PostPage from './pages/PostPage'
import './App.css';

function App() {
  // get the theme from context
  const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <div className={`container ${theme}`}>
        <NavBar />
        <div className="main">
          <Switch>
            <Route path="/post/:postId"><PostPage /></Route>
            <Route path="/"><HomePage /></Route>
          </Switch>
        </div>
        <div className="footer">Awesome Blog. All rights reserved</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
