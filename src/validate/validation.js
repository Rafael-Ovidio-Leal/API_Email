const Joi = require('joi');

class validation{

    emailValidator(email){
        const schema = Joi.string().email({ minDomainSegments: 2})
        const resource = schema.validateAsync(email)
        if (resource.error !== null) {
            return true;
        }
    }

}
module.exports = new validation;