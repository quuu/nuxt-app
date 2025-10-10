import { defineEventHandler, readValidatedBody, createError, setResponseStatus, getRequestIP } from 'h3';
import { checkBotId } from 'botid/server';

export default defineEventHandler(async (event) => {
    const headers = getRequestHeaders(event);
    console.log('Received Headers:', headers);
    const verification = await checkBotId();
    console.log('BotID Verification:', verification);
    console.log('Incoming Request Headers:', headers);
    if (verification.isBot) {
        console.warn('Bot traffic detected. Logging for now...');
        /* throw createError({
            statusCode: 403,
            statusMessage: 'Access denied',
            message: 'Bot traffic is not allowed to submit this form.'
        }); */
    } else {
        console.log('Human traffic verified. Proceeding with form submission.');
    }
    return verification;
});