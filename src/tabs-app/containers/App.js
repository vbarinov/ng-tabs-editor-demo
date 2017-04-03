class AppController {
  constructor(tabsService, activeFilter) {
    this.tabs = activeFilter(tabsService.tabs);
  }
}

export const App = {
  template: require('./App.pug'),
  controller: AppController
};
