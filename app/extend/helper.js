'use strict';

module.exports = {

    getHost() {
        let { isOnline } = this.app.config;
        if (isOnline) {
            return this.app.config.cdnHost.online
        }
        return this.app.config.cdnHost.local;
    }

}