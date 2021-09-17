const routes = require('./index2');

module.exports = (router)=>{
 router.use('/', routes.GET);
 router.use('/', routes.POST);
};