import React from 'react'
import { Switch, Route, Redirect, routerRedux } from 'dva/router'
import IndexPage from './routes/IndexPage'
import dynamic from 'dva/dynamic'

const { ConnectedRouter } = routerRedux

function RouterConfig({ history, app }) {

  const routes = [
    {
      path: "/dashboard",
      models: () => [import('./models/dashboard')],
      component: () => import('./routes/Dashboard'),
    }, {
      path: "/videoManagement",
      models: () => [import('./models/videoManagement')],
      component: () => import('./routes/videoMangement/VideoManagement'),
    }, {
      path: "/userManagement",
      models: () => [import('./models/userManagement')],
      component: () => import('./routes/userManagement/UserManagement'),
    }, {
      path: "/work",
      component: () => import('./routes/work/Work'),
    }
  ]

  return (
    <ConnectedRouter history={history}>
      <IndexPage>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/dashboard" />)} />
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
          {/* <Route component={error} /> */}
        </Switch>
      </IndexPage>
    </ConnectedRouter>
  );
}

export default RouterConfig;
