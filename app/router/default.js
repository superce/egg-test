'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // router.get('/default/get', controller.default.home.index);
  router.post('/default/get', controller.default.home.get);
  router.post('/default/add', controller.default.home.add);
  router.post('/default/update', controller.default.home.update);
  router.post('/default/delete', controller.default.home.delete);
};
