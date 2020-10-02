import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './app/components/containers/App';
import Todos from './app/components/containers/Todos';
import Todo from './app/components/containers/Todo';

export default (
  <Route path="/" component={App}>
     <IndexRoute component={Todos} />
     <Route path="/:id" component={Todo} />
  </Route>
)
