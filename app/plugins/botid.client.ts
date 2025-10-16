import { initBotId } from 'botid/client/core';

export default defineNuxtPlugin({
    enforce: 'pre',
    setup() {
        console.log('Initializing BotId plugin...');
        initBotId({
            protect: [{ path: '/api/contact/test', method: 'post' }],
        });
        console.log('BotId plugin initialized.');
    },
});