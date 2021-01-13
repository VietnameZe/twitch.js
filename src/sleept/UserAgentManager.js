const path = require('path');
const constants = require(path.resolve(__dirname,'..','utils','constants'));

class UserAgentManager {
    constructor() {
        this.build(this.constructor.DEFAULT);
    }

    set({ url, version } = {}) {
        this.build({
            url: url || this.constructor.DEFAULT.url,
            version: version || this.constructor.DEFAULT.version,
        });
    }

    build(ua) {
        this.userAgent = `TwitchBot (${ua.url}, ${ua.version}) Node.js/${process.version}`;
    }
}

UserAgentManager.DEFAULT = {
    url: constants.Package.homepage.split('#')[0],
    version: constants.Package.version,
};

module.exports = UserAgentManager;
