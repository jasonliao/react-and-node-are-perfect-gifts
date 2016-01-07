import express from 'express';
import http from 'http';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RoutingContext } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './../app/store/configureStore';
import { routes } from './../app/routes';

const app = express();

app.use(express.static(__dirname + '/../public'));

app.set('views', __dirname + '/../views');
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, props) => {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirectLocation) {
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    } else if (props) {
      const markup = renderToString(
        <Provider store={configureStore()} >
          <RoutingContext { ...props } />
        </Provider>
      );
      res.render('index', {markup});
    } else {
      res.sendStatus(404);
    }
  });
});

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server listen port 3000');
});
