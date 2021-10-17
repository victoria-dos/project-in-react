import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './NavBar';
import './App.css';
// add css for page-body id

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact></Route>
            <Route path="/about" component={AboutPage}></Route>
            <Route path="/articles-list" component={ArticlesListPage}></Route>
            <Route path="/article/:name" component={ArticlePage}></Route>
            <Route component={NotFoundPage}></Route>
          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
