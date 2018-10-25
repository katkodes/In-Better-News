$(document).ready(function() {

$(".better").fadeIn(4000);

$.ajax({url: "content.html", async: "true"});
$.ajax({url: "AandE.html", async: "true"});
$.ajax({url: "BandP.html", async: "true"});
$.ajax({url: "stem.html", async: "true"});
$.ajax({url: "local.html", async: "true"});
$.ajax({url: "national.html", async: "true"});
$.ajax({url: "inter.html", async: "true"});
$.ajax({url: "contact.html", async: "true"});
$.ajax({url: "sign-up.html", async: "true"});
$.ajax({url: "shop.html", async: "true"});
});
  // Art/Entertainment Nav
    $("#ae").click(function(){
      $("#display").load("AandE.html");
});

// Contact form Nav
  $("#contact").click(function(){
    $("#content").load("contact.html");
  });

  // Sign-up form
    $("#sign").click(function(){
      $("#content").load("sign-up.html #sign-up");
    });

// Art/Entertainment News Item 1
$("#1AE").click(function(){
  $("#content").load("content.html #C1");
});


// Art/Entertainment News Item 2
  $("#2AE").click(function(){
    $("#content").load("content.html #C2");
  });

// Art/Entertainment News Item 3
  $("#3AE").click(function(){
    $("#content").load("content.html #C3");
  });

// Art/Entertainment News Item 4
  $("#4AE").click(function(){
    $("#content").load("content.html #C4");
  });

// Art/Entertainment News Item 5
  $("#5AE").click(function(){
    $("#content").load("content.html #");
  });

// Business/Politics Nav
  $("#bp").click(function(){
    $("#display").load("BandP.html");
  });

  // Business/Politics News Item 1
    $("#1bp").click(function(){
      $("#content").load("content.html #1BP");
    });

  // Business/Politics News Item 2
      $("#2bp").click(function(){
        $("#content").load("content.html #2BP");
      });

  // Business/Politics News Item 3
        $("#3bp").click(function(){
          $("#content").load("content.html #3BP");
        });

  // Business/Politics News Item 4
          $("#4bp").click(function(){
            $("#content").load("content.html #4BP");
          });

  // Business/Politics News Item 5
          $("#5bp").click(function(){
            $("#content").load("content.html #5BP");
          });

// STEM Nav
  $("#stem").click(function(){
    $("#display").load("stem.html");
  });

// STEM News Item 1
  $("#1stem").click(function(){
    $("#content").load("content.html #stem1");
  });

// STEM News Item 2
  $("#2stem").click(function(){
    $("#content").load("content.html #stem2");
  });

// STEM News Item 3
  $("#3stem").click(function(){
    $("#content").load("content.html #stem3");
  });

// STEM News Item 4
  $("#4stem").click(function(){
    $("#content").load("content.html #stem4");
  });

// STEM News Item 5
  $("#5stem").click(function(){
    $("#content").load("content.html #stem5");
  });

// Local Nav
  $("#local").click(function(){
    $("#display").load("local.html");
  });

  // Local News Item 1
    $("#1local").click(function(){
      $("#content").load("content.html #local1");
    });

    // Local News Item 2
      $("#2local").click(function(){
        $("#content").load("content.html #local2");
      });

      // Local News Item 3
        $("#3local").click(function(){
          $("#content").load("content.html #local3");
        });

        // Local News Item 4
          $("#4local").click(function(){
            $("#content").load("content.html #local4");
          });

          // Local News Item 5
            $("#5local").click(function(){
              $("#content").load("content.html #local5");
            });

// National Nav
  $("#natl").click(function(){
    $("#display").load("national.html");
  });

  // National News Item 1
    $("#1natl").click(function(){
      $("#content").load("content.html #natl-1");
    });

    // National News Item 2
      $("#2natl").click(function(){
        $("#content").load("content.html #natl-2");
      });

      // National News Item 3
        $("#3natl").click(function(){
          $("#content").load("content.html #natl-3");
        });

        // National News Item 4
          $("#4natl").click(function(){
            $("#content").load("content.html #natl-4");
          });

          // National News Item 5
            $("#5natl").click(function(){
              $("#content").load("content.html #natl-5");
            });
