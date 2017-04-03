class AppController {
  constructor(tabsService) {
    this.tabs = tabsService.tabs;
  }
}

export const App = {
  template: require('./App.pug'),
  controller: AppController
};
