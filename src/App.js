import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import ContactList from './components/ContactList';
import ContactDetail from './components/ContactDetail';
import { HOME, DETAIL } from './constants/routes';
import './App.css';

function App() {
  return (
    <div className="address-book">
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
