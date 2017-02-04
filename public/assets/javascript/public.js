$(function() {
    //on click of the devour button
    $(".devour").on("submit", function(e) {
        //prevent the default of the submit button
        e.preventDefault();
        var currentURL = window.location.origin;
        var userInput = $(this).attr("id");

        // post the newly added data
        $.ajax({
            url: currentURL + "/" + userInput,
            data: { burger_name: userInput },
            type: "PUT",
            success: function(res) {
                window.location.replace('/');
            }
        });

    });
    //on click of the submit button
    $(".create-form").on("submit", function(e) {
        e.preventDefault();
        var currentURL = window.location.origin;
        var userInput = $("#burger_name").val().trim();

        // post the newly added data
        $.post(currentURL + "/", { burger_name: userInput }, function(res) {
            window.location.replace('/');
        });

    });


});
