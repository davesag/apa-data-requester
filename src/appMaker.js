import express from 'express';
import cors    from 'cors';

const makeApp = () => {
  const app = express();
  app.use(cors());
  app.set('views', './src/views')
  app.set('view engine', 'pug');
  app.get('/', function (req, res) {
    res.render('index', { title: 'Action Server'});
  });

  return app;
}

module.exports = makeApp;
