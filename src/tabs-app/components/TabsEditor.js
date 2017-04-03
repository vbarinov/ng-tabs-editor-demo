class TabsEditorController {
  /** @ngInject */
  constructor($state) {
    this.$state = $state;
  }

  handleSave() {
    this.onSave({data: this.tabs});
    this.$state.go('app');
  }
}

export const TabsEditor = {
  template: require('./TabsEditor.pug'),
  controller: TabsEditorController,
  bindings: {
    tabs: '<',
    onSave: '&'
  }
};
