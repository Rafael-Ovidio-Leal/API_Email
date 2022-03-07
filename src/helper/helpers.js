class validation{

    emailTemplate(result){

        const templateData = {};

        if(result.template == 'recuperaSenha'){
            templateData.nome = result.nome;
            templateData.email = result.email;
            templateData.senha = result.senha;
        }

        return templateData;
    }

}

module.exports = new validation;