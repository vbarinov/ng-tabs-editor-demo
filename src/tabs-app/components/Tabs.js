class TabsController {
  /** @ngInject */
  constructor(tabsService) {
    this.tabs = [];
    this.tabsService = tabsService;
  }

  selectTab(tab) {
    this.tabs = this.tabsService.select(tab, this.tabs);
  }

  isNoneSelected() {
    return !this.tabs.some(tab => angular.isDefined(tab.selected) && tab.selected);
  }

  selectFirstByDefault() {
    if (angular.isDefined(this.tabs) && this.tabs.length && this.isNoneSelected()) {
      this.selectTab(this.tabs[0]);
    }
  }

  $onInit() {
    this.selectFirstByDefault();
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
