const axios = require('axios');
const apiUrl = global.twitchApis.config.http.host;
const headers = global.twitchApis.config.http.headers;
const { logger } = require('../../utils');

/**
 * Do a http request to twitch web api
 * @param {String} path 
 * @param {Object} options 
 */
async function twitchRequest(method, path, options) {
    return Promise((resolve, reject) => {
        const finalUrl = apiUrl + path;
        const hasParam = options.params !== undefined ? true : false;

        if (method === 'get') {
            if (hasParam) {
                axios.get(finalUrl, { params: options.params, headers: headers }).then(result => {
                    return resolve(result);
                }).catch(err => {
                    logger.error(err);
                    return reject(err);
                });
            } else {
                axios.get(finalUrl, { headers: headers }).then(result => {
                    return resolve(result);
                }).catch(err => {
                    logger.error(err);
                    return reject(err);
                });
            }
        } else {
            axios.post(finalUrl, options.data, { headers: headers }).then(result => {
                return resolve(result);
            }).catch(err => {
                logger.error(err);
                return reject(err);
            });
        }
    });
}

module.export.request = twitchRequest;
