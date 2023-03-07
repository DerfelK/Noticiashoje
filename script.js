$(document).ready(function () {
    $('#tel').mask('(00) 00000-0000', {placeholder:'(99) 98989-9898'})

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: false
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, digite seu nome.',
            email: 'Por favor, digite seu e-mail.',
            mensagem: 'Por favor, digite a sua mensagem.'
        },
        submitHandler: function(form) {
            
        }
    })
});