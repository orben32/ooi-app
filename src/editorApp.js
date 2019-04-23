import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import { ViewerScriptWrapper, withStyles } from '@wix/native-components-infra';
import viewerScript from './viewerApp/viewerScript';
import _ from 'lodash';

const EditorApp = ViewerScriptWrapper(App,{
    viewerScript,
    Wix: window.Wix,
    widgetConfig: {},
    overrides: {
      platform: {
        baseUrls: {
          staticsBaseUrl: window.__STATICS_BASE_URL__,
        },
      },
    },
  },
);

ReactDOM.render(<EditorApp />, document.getElementById('root'));
