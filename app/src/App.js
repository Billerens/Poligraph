import React from "react";
import { Route, Switch } from "react-router-dom";

import PageWrapper from "./containers/pageWrapper/PageWrapper";

import Breath from "./views/breath/Breath";
import BreathInfo from "./views/breathInfo/BreathInfo";
import Heartbeat from "./views/heartbeat/Heartbeat";
import HeartbeatInfo from "./views/heartbeatInfo/HeartbeatInfo";
import Skin from "./views/skin/Skin";
import SkinInfo from "./views/skinInfo/SkinInfo";
import General from "./views/general/General";
import Muscles from "./views/muscles/Muscles";
import MusclesInfo from "./views/musclesInfo/MusclesInfo";
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
          path="/breathInfo"
          render={(props) => (
            <PageWrapper
              {...props}
              title="Информация о датчиках дыхания"
              component={BreathInfo}
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
          path="/skinInfo"
          render={(props) => (
            <PageWrapper
              {...props}
              title="Информация о датчиках кожи"
              component={SkinInfo}
              notAuth
            />
          )}
        />
        <Route
          path="/muscles"
          render={(props) => (
            <PageWrapper {...props} title="Мышцы" component={Muscles} />
          )}
        />
        <Route
          path="/musclesInfo"
          render={(props) => (
            <PageWrapper
              {...props}
              title="Информация о датчиках мышц"
              component={MusclesInfo}
            />
          )}
        />
        <Route
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
          path="/heartbeatInfo"
          render={(props) => (
            <PageWrapper
              {...props}
              title="Информация о датчиках сердцебиения"
              component={HeartbeatInfo}
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
