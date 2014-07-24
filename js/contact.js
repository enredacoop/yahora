jQuery(function($)  
{
    $("#contact_form").submit(function()
    {
        var email = $("#email").val(); // get email field value
        var name = $("#name").val(); // get name field value
        var msg = $("#msg").val(); // get message field value
        $.ajax(
        {
            type: "POST",
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                'key': 'Pvn2YkOjtAs5V5w2p1FBMQ',
                'message': {
                    'from_email': email,
                    'from_name': name,
                    'headers': {
                        'Reply-To': email
                    },
                    'subject': 'Contacto desde yahora.org',
                    'text': msg,
                    'to': [
                    {
                        'email': 'info@yahora.org',
                        'name': 'Yahora',
                        'type': 'to'
                    }]
                }
            }
        })
        .done(function(response) {
            alert('El mensaje ha sido enviado correctamente. ¡Muchas Gracias!'); // show success message
            $("#name").val(''); // reset field after successful submission
            $("#email").val(''); // reset field after successful submission
            $("#msg").val(''); // reset field after successful submission
        })
        .fail(function(response) {
            alert('Error enviado el mensaje');
        });
        return false; // prevent page refresh
    });
});