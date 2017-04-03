class TabsController {
  /** @ngInject */
  constructor(tabsService) {
    this.tabsService = tabsService;
  }

  selectTab(tab) {
    this.tabs = this.tabsService.select(tab, this.tabs);
  }

  $onInit() {
    if (angular.isDefined(this.tabs) && this.tabs.length) {
      this.selectTab(this.tabs[0]);
    }
  }
}

export const Tabs = {
  template: require('./Tabs.pug'),
  controller: TabsController,
  bindings: {
    tabs: '<',
    emptyMessage: '@?'
  }
};
