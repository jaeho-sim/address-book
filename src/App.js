import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import { HOME, DETAIL } from './constants/routes';
import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="address-book">
      <Header />
      <Router>
        <Switch>
          <Route path={DETAIL}>
            <ContactDetail />
          </Route>
          <Route exact path={HOME}>
            <ContactList />
          </Route>
          <Redirect from="*" to={HOME} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
