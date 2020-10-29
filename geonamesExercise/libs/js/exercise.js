$('#exampleChoice').click(function () {
    $('.display').css('display', 'none');
    $('#example').css('display', 'initial');
    $('.choice').css({
        'background-color': '#f2f2f2'
    });
    $('#exampleChoice').css({
        'background-color': '#3b3b3b'
    });
});

$('#countryCodeChoice').click(function () {
    $('.display').css('display', 'none');
    $('#countryCodes').css('display', 'initial');
    $('.choice').css({
        'background-color': '#f2f2f2'
    });
    $('#countryCodeChoice').css({
        'background-color': '#3b3b3b'
    });
});

$('#timezoneChoice').click(function () {
    $('.display').css('display', 'none');
    $('#timezone').css('display', 'initial');
    $('.choice').css({
        'background-color': '#f2f2f2'
    });
    $('#timezoneChoice').css({
        'background-color': '#3b3b3b'
    });
});

$('#elevationChoice').click(function () {
    $('.display').css('display', 'none');
    $('#elevation').css('display', 'initial');
    $('.choice').css({
        'background-color': '#f2f2f2'
    });
    $('#elevationChoice').css({
        'background-color': '#3b3b3b'
    });
});