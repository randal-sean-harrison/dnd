$(document).ready(function() {


  // Load the top page navbar
  $("#navbar").load("navbar.html", function() {
    console.log("Loaded navbar");
  });
  // Load the top page navbar
  $("#jumbotron").load("jumbotron.html", function() {
    console.log("Loaded jumbotron");
  });
  // Load the top page navbar
  $("#footer").load("footer.html", function() {
    console.log("Loaded footer");
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Redirect to URL on data-url attr ---------------------------------
  $(document).on("click", "[data-url]", function() {
    var url = $(this).data("url");
    window.open(url);
  });


});
