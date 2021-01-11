$(document).ready(function(e) {
	$("#login").on('submit',(function(e) {
        e.preventDefault();

        if($('#username').val().length>0)
        {
            if($('#username').val().trim()=='')
            {
                alert('Enter username');
                $('#username').focus();
                return;
            }
        }
        else
        {
            alert('Enter username');
            $('#username').focus();
            return;
        }
    
        if($('#password').val().length>0)
        {
            if($('#password').val().trim()=='')
            {
                alert('Enter password');
                $('#password').focus();
                return;
            }
        }
        else
        {
            alert('Enter password');
            $('#password').focus();
            return;
        }
    
        var username = $('#username').val();
        var password = $('#password').val();
    
        $.post('/validate_user',
        {
            username: username,
            password: password
        },
        function(data)
        {
            console.log(data);

            if (data == 'OK')
            {
                alert('Success');
            }
            else
            {
                alert(data);
            }
        })
        .fail(function (xhr)
        {
            switch (xhr.status)
            {
                case 500:
                    alert('500: Error. ');
                    break;
                default:
                    alert('Error');
            }
        })
    }));
})

function cancel()
{
    $('#username').empty();
    $('#password').empty();
}