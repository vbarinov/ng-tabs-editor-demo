class TabController {}

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
