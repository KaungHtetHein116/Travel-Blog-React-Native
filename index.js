/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import mockServer from './mockServer';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs(); //Ignore all log notifications

if (window.server) {
  window.server.shutdown();
}
window.server = mockServer.dataServer();

AppRegistry.registerComponent(appName, () => App);
