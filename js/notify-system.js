/**
 * uikitty3 notification systen.
 */

(function($, Drupal) {
  $("body").on("click", ".uk-button[data-message]", function() {
    UIkit.notification({
      message: $(this).data(),
      status: 'primary',
      pos: 'top-right',
      timeout: 5000
    });
  });
  $('body .uk-notify-alert').click();
})(jQuery, Drupal);
