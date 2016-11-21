$('#close-popup').click(function () {
    $('.form').toggle();
});

$('.form').find('input, textarea').on('keyup blur focus', function (e) {

    var $this = $(this),
        label = $this.prev('label');

    if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.removeClass('highlight');
        }
    } else if (e.type === 'focus') {

        if ($this.val() === '') {
            label.removeClass('highlight');
        }
        else if ($this.val() !== '') {
            label.addClass('highlight');
        }
    }

});
$('#signup-btn').click(function (e) {
    this
    e.preventDefault();
    $('#signup').show();
    $('#login').hide();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
});
$('#login-btn').click(function (e) {
    e.preventDefault();
    $('#login').show();
    $('#signup').hide();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
});

$('#login-form').on('submit', function (e)  {
    e.preventDefault();

    var body = {
        email: $('#login-mail').val(),
        password: $('#password').val()
    };
    $.ajax({
        url: '/login',
        type: 'POST',
        data: body,
        success: function (data) {
            user_infos = data.infos;
            window.localStorage.setItem('jtw', data.id_token);
            $('.form').toggle();
            paper.game.msg = lang.LOGGED;
            paper.game.stateTransition.to('Menu');
        },
        error: function (err) {
            var response = JSON.parse(err.response);
            switch (response.type) {
                case 1:
                    $('.server_msg').append(lang.LOG_OR_PASS);
                        break;
                case 4:
                    $('.server_msg').append(lang.DONT_MATCH);
                    break;
                default: $('.server_msg').append('');
            }
        }
    });
});

$('#register-form').on('submit', function(e) {
    e.preventDefault();
    var body = {
        email: $('#email').val(),
        pseudo: $('#pseudo').val(),
        password1: $('#password1').val(),
        password2: $('#password2').val()
    };
    $.ajax({
        url: '/register',
        type: 'POST',
        data: body,
        success: function (data) {
            user_infos = data.infos;
            window.localStorage.setItem('jtw', data.id_token);
            $('.form').toggle();
            paper.game.msg = lang.LOGGED;
            paper.game.stateTransition.to('Menu');
        },
        error: function (err) {
            var response = JSON.parse(err.response);
            switch (response.type) {
                case 1:
                    $('.server_msg').append(lang.LOG_OR_PASS);
                    break;
                case 2:
                    $('.server_msg').append(lang.EMAIL_ALLREADY_EXIST);
                    break;
                case 3:
                    $('.server_msg').append(lang.PSEUDO_ALLREADY_EXIST);
                    break;
                default: $('.server_msg').html('');
            }
        }
    });
});