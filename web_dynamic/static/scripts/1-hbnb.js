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