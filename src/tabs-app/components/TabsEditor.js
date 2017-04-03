class TabsEditorController {
  /** @ngInject */
  constructor() {
    this.tabs = [];
  }

  handleSave() {
    this.onSave({data: this.tabs});
  }

  handleCancel() {
    this.onCancel();
  }

  $onInit() {
    angular.copy(this.origTabs, this.tabs);
  }
}

export const TabsEditor = {
  template: require('./TabsEditor.pug'),
  controller: TabsEditorController,
  bindings: {
    origTabs: '<tabs',
    onSave: '&',
    onCancel: '&'
  }
};
