$(document).ready(function () {
    $('input[type="checkbox"]').change(function () {
        var id = $(this).data('id');
        var name = $(this).data('name');
        if ($(this).prop('checked')) {
            // Checkbox checked, store ID
            // Here you can store the ID in a variable or add it to a list
            console.log("Checkbox checked - ID:", id, "Name:", name);
        } else {
            // Checkbox unchecked, remove ID
            // Here you can remove the ID from the variable or list
            console.log("Checkbox unchecked - ID:", id, "Name:", name);
        }
        // Update the h4 tag inside the div Locations with the list of States or Cities checked
        updateLocations();
    });

    function updateLocations() {
        var checkedLocations = [];
        $('input[type="checkbox"]').each(function () {
            if ($(this).prop('checked')) {
                checkedLocations.push($(this).data('name'));
            }
        });
        $('#locations').html('');
        for (var i = 0; i < checkedLocations.length; i++) {
            $('#locations').append('<li>' + checkedLocations[i] + '</li>');
        }
    }

    // When the button tag is clicked, make a new POST request to places_search with the list of Amenities, Cities, and States checked
    $('button').click(function () {
        // Here you can make the POST request to places_search with the list of Amenities, Cities, and States checked
        console.log("Button clicked - Make POST request");
    });
});
