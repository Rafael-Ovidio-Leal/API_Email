const AWS = require("aws-sdk");
const ses = new AWS.SES();

module.exports.createTemplate = async (event, context, callback) => {
    const result = event['body'] || event;

    const params = {
        Template: {
            TemplateName: result.TemplateName,
            HtmlPart: result.HtmlPart,
            SubjectPart: result.SubjectPart,
        },
    };

    ses.createTemplate(params, function (err, data) {
        if (err) {
            console.error("Failed to create template email : " + err);
            callback(err, data)
        } else {
            console.info("create template successfully : " + JSON.stringify(data));
            callback(null, data);
        }
    })
}