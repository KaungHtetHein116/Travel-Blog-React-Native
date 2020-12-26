/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import mockServer from './mockServer';

if (window.server) {
  window.server.shutdown();
}
window.server = mockServer.dataServer();

AppRegistry.registerComponent(appName, () => App);
