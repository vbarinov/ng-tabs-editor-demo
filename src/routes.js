export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('editor', {
      url: '/editor',
      component: 'tabsEditor',
      resolve: {
        tabs: tabsService => tabsService.tabs,
        onSave: tabsService => data => tabsService.saveTabs(data)
      }
    });
}
