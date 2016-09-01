require('dotenv').config({silent: true});

import {start} from './src/server';

const name = 'Action Server';

start()
  .then(
    _data => console.log('Started', name),
    err   => console.log('Could not start', name, 'because', err)
  )
  .catch(err => console.log('Caught Error starting', name, 'because', err));
