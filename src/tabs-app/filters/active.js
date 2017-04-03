export default () => {
  return items => items.filter(i => angular.isDefined(i.active) && i.active);
};
