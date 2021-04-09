import { lazy, Suspense, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MainLayout from 'src/layouts/MainLayout';
import LoadingScreen from 'src/components/LoadingScreen';

// Add your routes here and add the layout/container it will be a child of
const routesConfig = [
  {
    exact: true,
    layout: MainLayout,
    path: '/user/:userId',
    component: lazy(() => import('src/views/UserView')),
  },
  {
    exact: true,
    layout: MainLayout,
    path: '/:page',
    component: lazy(() => import('src/views/HomeView')),
  },
  {
    component: () => <Redirect to="/1" />,
  },
];

// Map the routes and struture it like you usually would with react-router-dom
function renderRoutes(routes) {
  return routes ? (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        {routes.map((route, i) => {
          const Layout = route.layout || Fragment;
          const Component = route.component;
          return (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              render={(props) => (
                <Layout>
                  {route.routes ? renderRoutes(route.routes) : <Component {...props} />}
                </Layout>
              )}
            />
          );
        })}
      </Switch>
    </Suspense>
  ) : null;
}

function Routes() {
  return renderRoutes(routesConfig);
}

export default Routes;
