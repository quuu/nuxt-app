import { initBotId } from 'botid/client/core';
 
export default defineNuxtPlugin({

  setup() {
    console.log('Initializing BotId plugin...');
    initBotId({
      protect: [{ path: '/api/contact/test', method: 'POST' }],
    });
    console.log('BotId plugin initialized.');
  },
});