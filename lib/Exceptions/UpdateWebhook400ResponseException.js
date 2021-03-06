

'use strict';

const APIException = require('./APIException');

/**
 * Creates an instance of UpdateWebhook400ResponseException
 */
class UpdateWebhook400ResponseException extends APIException {
    /**
     * @constructor
     */
    constructor() {
        super();
        /**
         * TODO: Write general description for this field
         */
        this.message = null;
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'message', realName: 'message' },
        ]);
    }
}

module.exports = UpdateWebhook400ResponseException;
