import angular from 'angular';
import 'angular-mocks';
import {TabsEditor} from './TabsEditor';

describe('TabsEditor component', () => {
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

  let bindings;
  let component;
  let $rootScope;
  let $compile;
  let $componentController;

  beforeEach(() => {
    angular
      .module('tabsEditor', [])
      .component('tabsEditor', TabsEditor);

    angular.mock.module('tabsEditor');
  });

  beforeEach(angular.mock.inject((_$rootScope_, _$compile_, _$componentController_) => {
    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $componentController = _$componentController_;
  }));

  beforeEach(() => {
    bindings = {
      tabs: angular.copy(initialTabs),
      onSave: () => {},
      onCancel: () => {}
    };
    component = $componentController('tabsEditor', {}, bindings);
  });

  it('should render properly', () => {
    const $newScope = $rootScope.$new();
    const elem = $compile(`<tabs-editor tabs="[{label: 'test'}]"></tabs-editor>`)($newScope);
    $newScope.$digest();
    const tabItems = elem.find('li');
    expect(tabItems).not.toBeNull();
  });

  it('should call binded `onSave` expression', () => {
    spyOn(component, 'onSave').and.callThrough();
    component.handleSave();
    expect(component.onSave).toHaveBeenCalledWith({
      data: initialTabs
    });
  });

  it('should call binded `onCancel` expression', () => {
    spyOn(component, 'onCancel').and.callThrough();
    component.handleCancel();
    expect(component.onCancel).toHaveBeenCalledTimes(1);
  });
});
