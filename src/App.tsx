import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import SearchUser from "./components/SearchUser/SearchUser";
import ChatList from "./components/ChatList/ChatList";
import Dialog from "./components/Dialog/Dialog";
import Auth from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/auth" component={Auth} />
            <Route path="/search" component={SearchUser} />
            <Route path="/chats" component={ChatList} />
            <Route path="/dialog" component={Dialog} />
            <Route path="/" component={ChatList} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
