class AppController {
  /** @ngInject */
  constructor(tabsService, activeFilter) {
    this.tabsService = tabsService;
    this.activeFilter = activeFilter;
  }

  $onInit() {
    this.tabs = this.activeFilter(this.tabsService.tabs);
  }
}

export const App = {
  template: require('./App.pug'),
  controller: AppController
};
