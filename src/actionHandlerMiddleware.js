import * as Actions  from './actions';
import * as Handlers from './handlers';

import convertActionTypeToHandlerName from './utils/convertActionTypeToHandlerName';

const actionHandlerMiddleware = () => store => next => action => {

  const handle = (handler) => Handlers[handler](store);

  const handlerName = convertActionTypeToHandlerName(action.type);
  if (typeof Handlers[handlerName] === 'function') handle(handlerName)(action);

  return next(action);
};

module.exports = actionHandlerMiddleware;
