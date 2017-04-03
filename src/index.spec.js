const context = require.context('./tabs-app', true, /\.(js|ts|tsx)$/);
context.keys().forEach(context);
