$(document).ready(function () {
    var amenityIDs = {};

    // listen for changes in the input
    $("input[type='checkbox']").change(function () {
        var amenityId = $(this).data('id');
        var amenityName = $(this).data('name');

        if ($(this).is(':checked')) {
            amenityIDs[amenityId] = amenityName;
        } else {
            delete amenityIDs[amenityId];
        }

        var amenityLists = Object.values(amenityIDs).join(', ');
        $('#amenities').html('<h4>Amenities: ' + amenitiesList + '</h4>');
    })
});

$.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
        $('#api_status').addClass('available');
    } else {
        $('#api_status').removeClass('available');
    }
});