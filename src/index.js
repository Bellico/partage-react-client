import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'App.tsx';

ReactDOM.render(<App />, document.getElementById('root'));

if ('serviceWorker' in navigator) {
    // Notification.requestPermission(permission => {
    //     if (!('permission' in Notification)) {
    //         Notification.permission = permission;
    //     }
    //     return permission;
    // })

    navigator.serviceWorker.register('sw.js');
};
