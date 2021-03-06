
 'use strict';

const chai = require('chai');
const assert = chai.assert;
const TestHelper = require("../TestHelper");
const APIHelper = require("../../lib/APIHelper");
const testerlib = require("../../lib");
const testConfiguration = require("../TestBootstrap");
const baseController = require("../../lib/Controllers/BaseController");

const controller = testerlib.WebhooksController;
const CreateWebhookRequest = testerlib.CreateWebhookRequest;
const UpdateWebhookRequest = testerlib.UpdateWebhookRequest;

describe("WebhooksController Tests", function tests() {
    this.timeout(testConfiguration.TEST_TIMEOUT);

    /**
     * Delete a webhook that was previously created for the connected account.
A webhook can be cancelled by appending the UUID of the webhook to the endpoint and submitting a DELETE request to the /webhooks/messages endpoint.
*Note: Only pre-created webhooks can be deleted. If an invalid or non existent webhook ID parameter is specified in the request, then a HTTP 404 Not Found response will be returned.*
     */
    // it("should testDeleteWebhook1 response", function testDeleteWebhook1Test(done) {
    //     // parameters for the API call
    //     let webhookId = "a7f11bb0-f299-4861-a5ca-9b29d04bc5ad";
    //
    //     controller.deleteWebhook(webhookId, function callback(error, response, context) {
    //         // test response code
    //         assert.equal(401, context.response.statusCode);
    //         done();
    //     });
    // });

    /**
     * Update a webhook. You can update individual attributes or all of them by submitting a PATCH request to the /webhooks/messages endpoint (the same endpoint used above to delete a webhook)
A successful request to the retrieve webhook endpoint will return a response body as follows:
```
{
    "url": "https://webhook.com",
    "method": "POST",
    "id": "04442623-0961-464e-9cbc-ec50804e0413",
    "encoding": "JSON",
    "events": [
        "RECEIVED_SMS"
    ],
    "headers": {},
    "template": "{\"id\":\"$mtId\", \"status\":\"$statusCode\"}"
}
```
*Note: Only pre-created webhooks can be deleted. If an invalid or non existent webhook ID parameter is specified in the request, then a HTTP 404 Not Found response will be returned.*
     */
    /* it("should testUpdateWebhook1 response", function testUpdateWebhook1Test(done) {
        // parameters for the API call
        let webhookId = "a7f11bb0-f299-4861-a5ca-9b29d04bc5ad";
        let body = baseController.getObjectMapper().mapObject(    {        "url": "https://myurl.com",        "method": "POST",        "encoding": "FORM_ENCODED",        "events": [            "ENROUTE_DR"        ],        "template": "{\"id\": \"$mtId\", \"status\": \"$statusCode\"}"    }, 'UpdateWebhookRequest');

        controller.updateWebhook(webhookId, body, function callback(error, response, context) {
            // test response code
            assert.equal(200, context.response.statusCode);
            assert.lengthOf(headers, context.response.headers.length);
            done();
        });
    }); */

});
