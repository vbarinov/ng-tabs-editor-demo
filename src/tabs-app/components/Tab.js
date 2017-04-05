class TabController {
  /** @ngInject */
  constructor($sce) {
    this.$sce = $sce;
  }

  $onInit() {
    this.tab.content = this.$sce.trustAsHtml(this.tab.content);
  }
}

export const Tab = {
  template: require('./Tab.pug'),
  controller: TabController,
  require: {
    tabsCtrl: '^^tabs'
  },
  bindings: {
    tab: '<'
  }
};
