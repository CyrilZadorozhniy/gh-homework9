$(document).ready(function () {

    $('#add-class').on('click', function () {
        $(this).addClass('add-class');
    });

    $('#remove-class').on('click', function () {
        $(this).removeClass('remove-class');
    });

    $('#toggle-class').on('click', function () {
        $(this).toggleClass('toggle-class');
    });

    $('#get-attr').on('click', function () {
        console.log($(this).attr('class'));
    });

    $('#set-attr').on('click', function () {
        $(this).attr('class', 'set-attr');
    });

    $('#alert-on-click').on('click', function () {
        alert('Alert on click');
    });

    $('#triger-alert').on('click', function () {
        $('#alert-on-click').trigger('click');
    });

    $('#clone-this').on('click', function () {
        $(this).clone().insertAfter(this).text('cloned ' + $(this).text());
    });

    $('#closest-element').on('click', function () {
        console.log($(this).parent());
    });

    $('#each-btn-text').on('click', function () {
        let buttons = [];
        $('button').each(function () {
            buttons.push($(this).text());
        });
        console.log(buttons);
    });

    $('#find-me').on('click', function () {
        console.log($('body').find('#find-me'));
    });

    $('#fade-in-text').on('click', function () {
        $('#fade-text-in').fadeIn();
    });

    $('#fade-out-text').on('click', function () {
        $('#fade-text-out').fadeOut();
    });

    $('#hide-text').on('click', function () {
        $('#text-hide').hide();
    });

    $('#show-text').on('click', function () {
        $('#text-show').show();
    });

    $('#data-about-me').on('click', function () {

        console.log($(this).height() + "," + $(this).width() + ",", $(this).position(),
            $.map($('#get-attr')[0].attributes, function (attr) {
                return [attr.value];
            }),
            $(this).parent(), $(this).prev(), $(this).next(), $(this).text())
    })

    $('#form').on('submit', function (e) {
        e.preventDefault();
        console.log('Select =', $('select[name=select]').val());
        console.log('Name =', $('input[name=name]').val());
        console.log('Lastname =', $('input[name=lastname]').val());

        $('input[type=checkbox]').each(function () {
            console.log($(this).attr('name'), '=', ($(this).is(':checked') ? $(this).val() : 0));
        });
        console.log('Radio =', $('input[name=radio]:checked').val());
    });

    $('input[type=text]').on('change', function () {
        console.log($(this).val());
    });

    $('input[type=checkbox]').on('change', function () {
        console.log($(this).val());
    });

    $('input[type=radio]').on('change', function () {
        console.log($(this).val());
    });

    $('select[name=select]').on('change', function () {
        console.log($(this).val());
    });

    $('input[name=name]').keydown(function (ev) {
        if (ev.keyCode === 8) {
            ev.preventDefault();
            $(this).val('');
        }
    });

    $('input[name=lastname]').keypress(function (ev) {
        if (ev.keyCode === 61) {
            ev.preventDefault();
            $(this).val($(this).val()+$(this).val())
        }
    });

    $('input[name=password]').keydown(function (ev) {
        if (ev.keyCode === 112) {
            ev.preventDefault();
            ($(this).attr('type') == 'password') ? $(this).attr('type','text')
                : $(this).attr('type','password');

        }
    });
});