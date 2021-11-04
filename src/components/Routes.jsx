import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import Results from './Results';

export default function Routes() {
    return (
        <div>
            <Switch>
              <Route exact path='/'>
                <Redirect to='/search' />
              </Route>
              <Route exact path='/search'>
                <Results />
              </Route>
              <Route path='/images'>
                <Results />
              </Route>
              <Route path='/news'>
                <Results />
              </Route>
              <Route path='/videos'>
                <Results />
              </Route>
            </Switch>
        </div>
    )
}
