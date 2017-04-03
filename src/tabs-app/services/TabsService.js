export class TabsService {
  /** @ngInject */
  constructor(fakeTabs) {
    this.tabs = fakeTabs;
  }

  saveTabs(tabs) {
    this.tabs = tabs;
  }

  select(tab, tabs) {
    return tabs.map(item => {
      return item.label === tab.label ?
        Object.assign({}, item, {selected: true}) :
        Object.assign({}, item, {selected: false});
    });
  }
}
