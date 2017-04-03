export class TabsService {
  /** @ngInject */
  constructor(fakeTabs) {
    this.tabs = fakeTabs;
  }

  saveTabs(tabs) {
    this.tabs = tabs;
  }
}
