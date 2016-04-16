require('bootstrap-webpack');

import App from 'src/client/App.react';
import React from 'React';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById('browser_mount'));

// Watermark
if (console && console.log) {
  console.log(`
   _____                 _   ______               _             
  / ____|               | | |  ____|             (_)            
 | |  __  ___   ___   __| | | |____   _____ _ __  _ _ __   __ _ 
 | | |_ |/ _ \ / _ \ / _' | |  __\ \ / / _ \ '_ \| | '_ \ / _' |
 | |__| | (_) | (_) | (_| | | |___\ V /  __/ | | | | | | | (_| |
  \_____|\___/ \___/ \__,_| |______\_/ \___|_| |_|_|_| |_|\__, |
                                                           __/ |
                                                          |___/ 
`);
}