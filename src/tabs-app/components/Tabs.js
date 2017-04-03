class TabsController {
  /** @ngInject */
}

export const Tabs = {
  template: require('./Tabs.pug'),
  controller: TabsController,
  bindings: {
    tabs: '<'
  }
};
