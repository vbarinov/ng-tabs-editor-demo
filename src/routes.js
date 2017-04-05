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
        onSave: ($state, tabsService) => {
          return [`data`, data => {
            console.log('router onSave', data);
            tabsService.saveTabs(data);
            $state.go('app');
          }];
        },
        onCancel: $state => () => $state.go('app')
      }
    });
}
