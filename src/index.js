// core
import angular from 'angular';
import 'angular-ui-router';
import routesConfig from './routes';

import {App} from './tabs-app/containers/App';
import {TabsService} from './tabs-app/services/TabsService';
import {TabsEditor} from './tabs-app/components/TabsEditor';
import {Tabs} from './tabs-app/components/Tabs';
import {Tab} from './tabs-app/components/Tab';
import {TabsFooter} from './tabs-app/components/TabsFooter';
import activeFilter from './tabs-app/filters/active';
import FakeTabs from './tabs-app/values/FakeTabs';

// styling
import './index.scss';

export const app = 'tabs-app';

angular
  .module(app, ['ui.router'])
  .config(routesConfig)
  .service('tabsService', TabsService)
  .component('app', App)
  .component('tabsEditor', TabsEditor)
  .component('tabs', Tabs)
  .component('tab', Tab)
  .component('tabsFooter', TabsFooter)
  .filter('active', activeFilter)
  .value('fakeTabs', FakeTabs);
