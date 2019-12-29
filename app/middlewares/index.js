const actionMiddleware = () => next => action => {
  // eslint-disable-next-line no-console
  console.log('[Middleware] Action triggered:', action);
  next(action);
};

export { actionMiddleware };
