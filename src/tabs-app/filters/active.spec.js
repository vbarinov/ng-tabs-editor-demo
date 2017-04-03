import angular from 'angular';
import 'angular-mocks';
import activeFilter from './active';

describe('activeFilter', () => {
  let filter;
  let input;

  beforeEach(() => {
    angular
      .module('activeFilter', [])
      .filter('active', activeFilter);
    angular.mock.module('activeFilter');
  });

  beforeEach(angular.mock.inject(_$filter_ => {
    filter = _$filter_('active');
  }));

  beforeEach(() => {
    input = [
        {label: 'one', content: 'one content', active: true}, // <- active
        {label: 'two', active: false},
        {label: '5', content: null},
        {label: '55', active: null},
        {label: 'truth', active: 1} // <- active too
    ];
  });

  it('should filter collection of objects by `active` property', () => {
    const filtered = filter(input);

    expect(filtered).toEqual([input.shift(), input.pop()]);
  });
});
