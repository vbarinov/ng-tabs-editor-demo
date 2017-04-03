import {TabsService} from './TabsService';

describe('TabsService', () => {
  let tabs;
  let tabsService;

  beforeEach(() => {
    tabs = [
      {label: 'one', content: 'one content', active: true},
      {label: 'two'},
      {label: '5', content: null}
    ];
    tabsService = new TabsService();
  });

  it('can save tabs', () => {
    const tabNewData = tabs.concat({label: 'three', selected: false});

    tabsService.saveTabs(tabNewData);

    expect(tabsService.tabs).toEqual(tabNewData);
  });

  it('can select proper tab with label', () => {
    const tab = tabs[1];
    const selected = tabsService.select(tab, tabs);

    expect(selected[1].selected).toBe(true);
  });

  it('should select only single tab in all set', () => {
    const tab = tabs[0];
    const selected = tabsService.select(tab, tabs);

    expect(selected[0]).toEqual({
      label: 'one', content: 'one content', active: true, selected: true
    });
    expect(selected[1].selected).toBe(false);
    expect(selected[2].selected).toBe(false);
  });
});
