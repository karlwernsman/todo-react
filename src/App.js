import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Auth from './components/auth/Auth.js';
import Todos from './components/todos/Todos.js';
import { useUser } from './context/UserContext.js';

function App() {
  const { user } = useUser();
  return (
    <div className="App">
      <Switch>
        <Route path="/auth/:type" component={Auth} />
        <Route path="/auth/todos" component={Todos} />
        <Route exact path="/">
          <>
            {user && <Redirect to="/todos" />}
            {!user && <Redirect to="/auth/sign-in" />}
          </>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
