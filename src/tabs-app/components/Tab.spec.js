import angular from 'angular';
import 'angular-mocks';
import {Tab} from './Tab';

describe('Tab component', () => {
  const initialTabs = [
    {
      label: `Events`,
      content: `Events description`,
      active: true,
      selected: true
    },
    {
      label: `Analytics`,
      content: `Foo Analytics`,
      selected: true
    }
  ];

  const tabsMock = {
    template: `<div><tab ng-repeat="tab in $ctrl.tabs" tab="tab"></tab></div>`,
    bindings: {
      tabs: '<'
    }
  };

  let bindings;
  let component;
  let $rootScope;
  let $compile;

  beforeEach(() => {
    angular
      .module('tab', [])
      .component('tabs', tabsMock)
      .component('tab', Tab);

    angular.mock.module('tab');
  });

  beforeEach(angular.mock.inject((_$rootScope_, _$compile_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
  }));

  it('should render properly', () => {
    const $newScope = $rootScope.$new();
    const elem = $compile(`<tabs tabs="tabs"></tabs>`)($newScope);
    $newScope.tabs = angular.copy(initialTabs);
    $newScope.$digest();

    const tab = elem.find('tab').eq(1);
    expect(tab.html().trim()).toMatch(initialTabs[1].content);
  });
});
