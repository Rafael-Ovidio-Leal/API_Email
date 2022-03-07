'use strict';

const aws = require('aws-sdk');
const ses = new aws.SES();
const validate = require('../validate/validation')
const helper = require('../helper/helpers');


module.exports.recuperaSenha = async (event, context, callback) => {
    const result = event['body'] || event;

    console.log("Validando Email");
    const resource = validate.emailValidator(result.email);

    if(resource){
        console.log("Email validado");
        const templateData = helper.emailTemplate(result);

        //constantes para envio
        const params = {};
        
        var destination = {
            "ToAddresses": [result.email]
        };

        params.Source = "Reset Password <" + result.sender + ">";
        
        params.Destination = destination;
        params.Template = result.template;
        params.TemplateData  = JSON.stringify(templateData);

        console.log("Enviando Email !!!")
        try {
            await ses.sendTemplatedEmail(params).promise();
        } catch (err) {
            console.log(err);
            const response_error = {
                status: false,
                error: JSON.stringify({
                    message: err.message
                }),
            };

            callback(response_error);
        }

        console.log("Email enviado !!!");
        console.log("Enviou: " + result.sender);
        console.log("Recebendo: " + result.email);
        console.log("Template: " + result.template);
        const response_success = {
            status: true,
            data: JSON.stringify({
                message: ("Email sent!")
            }),
        };
        
        callback(null, response_success);

    }
    const response_error = {
        status: false,
        error: JSON.stringify({
            message: "Email invalido!"
        }),
    };

    callback(response_error);
}


