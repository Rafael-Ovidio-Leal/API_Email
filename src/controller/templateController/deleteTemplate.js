const AWS = require("aws-sdk");
const ses = new AWS.SES();

module.exports.deleteTemplate = async (event, context, callback) => {
    const result = event['body'] || event;

    ses.deleteTemplate({TemplateName: result.template}, function (err, data) {
        if (err) {
            console.error("Failed to delete template email : " + err);
            callback(err, data)
        } else {
            console.info("Successfully delete template email : " + JSON.stringify(data));
            callback(null, data);
        }
    })
}