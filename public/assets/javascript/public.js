$(function() {
    $(".devour").on("submit", function(e) {
        e.preventDefault();
        var currentURL = window.location.origin;
        var userInput = $(this).attr("id");

        console.log(userInput);
        // post the newly added data
        $.ajax({
            url: currentURL + "/",
            data: { burger_name: userInput },
            type: "PUT",
            success: function(res) {
                window.location.replace('/');
            }
        });

    });

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
