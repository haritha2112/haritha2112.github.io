function initializeCarousels() {
  $("#work-exp-owl-slider").owlCarousel({
      nav: true,
      loop: true,
      pagination: true,
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 2
        }
      }
  });
  $("#skills-owl-slider").owlCarousel({
      nav: true,
      loop: true,
      pagination: true,
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 3
        }
      }
  });
  $("#projects-owl-slider").owlCarousel({
      nav: true,
      loop: true,
      pagination: true,
      responsive: {
        0: {
          items: 1
        },
        500: {
          items: 3
        }
      }
  });
}

function attatchCloseEventToAlertBoxes() {
  $('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});
}

function initializeContactForm() {
  const successAlert = `<div class="alert-box ss-success hideit">
                          <p>Your message has been sent :)</p>
                          <i class="fa fa-times close"></i>
                        </div>`;
  const errorAlert = `<div class="alert-box ss-error hideit">
                        <p>Oops! Something went wrong :(</p>
                        <i class="fa fa-times close"></i>
                      </div>`;
  $("#contactForm").submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: "https://formspree.io/hrathin@g.clemson.edu",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json",
      beforeSend: function() {
        $("#contact-form-messages").find('.alert-box').hide();
      },
      success: function(data) {
        $("#contact-form-messages").append(successAlert);
        attatchCloseEventToAlertBoxes();
      },
      error: function(err) {
        $("#contact-form-messages").append(errorAlert);
        attatchCloseEventToAlertBoxes();
      }
    });
  });
}

$(document).ready(function() {
  initializeCarousels();
  initializeContactForm();
});
