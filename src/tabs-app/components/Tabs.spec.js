import angular from 'angular';
import 'angular-mocks';
import {Tabs} from './Tabs';

describe('Tabs component', () => {
  const initialTabs = [
    {
      label: `Events`,
      active: true
    },
    {
      label: `Analytics`,
      content: `Foo Analytics`
    }
  ];

  const tabsServiceMock = () => {
    return {
      tabs: initialTabs,
      saveTabs: () => {},
      select: jasmine.createSpy('select').and.callFake((tab, tabs) => {
        const selectedTabs = angular.copy(initialTabs);
        selectedTabs[0].selected = true;
        return selectedTabs;
      })
    };
  };

  let bindings;
  let component;
  let $rootScope;
  let $compile;
  let $componentController;

  beforeEach(() => {
    angular
      .module('tabs', [])
      .component('tabs', Tabs)
      .service('tabsService', tabsServiceMock);

    angular.mock.module('tabs');
  });

  beforeEach(angular.mock.inject((_$rootScope_, _$compile_, _$componentController_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $componentController = _$componentController_;
  }));

  it('should render properly', () => {
    const $newScope = $rootScope.$new();
    const elem = $compile(`<tabs tabs="tabs"></tabs>`)($newScope);
    $newScope.tabs = angular.copy(initialTabs);
    $newScope.$digest();

    const firstNav = elem.find('nav').eq(0).find('li').eq(0).find('a').eq(0);
    const tabRepeat = elem.find('tab').eq(0);

    expect(firstNav).not.toBeNull();
    expect(firstNav.text()).toEqual(initialTabs[0].label);
    expect(tabRepeat).not.toBeNull();
    expect(tabRepeat.attr('ng-repeat')).toBeTruthy();
  });

  it('should call `tabsService.select`', () => {
    bindings = {
      tabs: angular.copy(initialTabs)
    };
    component = $componentController('tabs', null, bindings);
    component.selectTab(initialTabs[0]);

    expect(component.tabsService.select).toHaveBeenCalledWith(initialTabs[0], initialTabs);
  });

  it('should select first tab if none are selected', () => {
    bindings = {
      tabs: angular.copy(initialTabs)
    };
    component = $componentController('tabs', null, bindings);
    component.selectFirstByDefault();

    expect(component.tabs).toBeDefined('`tabs` binding is not defined');
    expect(component.tabs[0].selected).toBeDefined('`selected` field is not defined');
    expect(component.tabs[0].selected).toBeTruthy('`selected` field is not truthy');
  });
});
