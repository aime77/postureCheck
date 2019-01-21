import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import SearchBooks from "./pages/SearchBooks";
import SavedBooks from "./pages/SavedBooks";
import Page404 from "./pages/Page404";

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Switch>
          <Route exact path="/" component={SearchBooks} />
          <Route exact path="/saved-books" component={SavedBooks} />
          <Route component={Page404} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
