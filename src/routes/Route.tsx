import React from 'react';
import {
  RouteProps as ReactDOMRouteProps,
  Route as ReactDOMRoute,
} from 'react-router-dom';

import DefaultLayout from '../pages/Layout/DefaultLayout';

interface RouteProps extends ReactDOMRouteProps {
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  return (
    <ReactDOMRoute
      {...rest}
      render={() => (
        <DefaultLayout>
          <Component />
        </DefaultLayout>
      )}
    />
  );
};

export default Route;
