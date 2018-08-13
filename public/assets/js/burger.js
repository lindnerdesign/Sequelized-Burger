$(document).ready(function() {

  $(".eatBurger").on("click", function(event) {
      event.preventDefault();
      var id = $(this).attr("data-id");
      var objColVals = {
          devoured: true
      };

      $.ajax("/api/burgers/" + id, {
          type: "POST",
          data: objColVals
      }).then(
          function() {
              console.log("burger devoured", id);
              location.reload();
          }
      );
  });

  $(".delBurger").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr("data-id");
    
    $.ajax({
        method: "DELETE",
        url: '/api/burgers/' + id

    }).then(
        function() {
            console.log("burger deleted", id);
            location.reload();
        }
    );
});

  $(".create-update-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#newBurger").val().trim(),
    };

    // Send the POST request.
    $.post(
     "/api/burgers"

    ,newBurger).then(
      function() {
        console.log("Created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
