import React from "react";
import { Route, Switch } from "react-router-dom";

import PageWrapper from "./containers/pageWrapper/PageWrapper";

import Breath from "./views/Breath";
import Heartbeat from "./views/Hearthbeat";
import Skin from "./views/Skin";
import General from "./views/General";
import Muscles from "./views/Muscles";
import NotFound from "./views/NotFound";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route
          exact
          path="/general"
          render={(props) => (
            <PageWrapper
              {...props}
              title="Общее состояние"
              component={General}
            />
          )}
        />
        <Route
          path="/breath"
          render={(props) => (
            <PageWrapper
              {...props}
              title="Дыхание"
              component={Breath}
              notAuth
            />
          )}
        />
        <Route
          path="/skin"
          render={(props) => (
            <PageWrapper {...props} title="Кожа" component={Skin} notAuth />
          )}
        />
        <Route
          exact
          path="/muscles"
          render={(props) => (
            <PageWrapper {...props} title="Мышцы" component={Muscles} />
          )}
        />
        <Route
          exact
          path="/heartbeat"
          render={(props) => (
            <PageWrapper
              {...props}
              title="Сердцебиение"
              component={Heartbeat}
            />
          )}
        />
        <Route
          path="*"
          render={(props) => (
            <PageWrapper {...props} title="Ошибка?" component={NotFound} />
          )}
        />
      </Switch>
    </React.Fragment>
  );
}

export default App;