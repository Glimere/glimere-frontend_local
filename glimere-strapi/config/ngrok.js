// ./config/middleware/ngrok.js

module.exports = (strapi) => {
    return {
      initialize() {
        strapi.app.use(async (ctx, next) => {
          // Add your custom header to the response
          ctx.set('ngrok-skip-browser-warning', 'skip-browser-warning');
          await next();
        });
      },
    };
  };
  