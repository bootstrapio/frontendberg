(function() {
  'use strict';

  // Your custom JavaScript goes here
  jQuery(document).ready(function($) {
    'use strict';
    $('figure').each(function() {
      var img = $('img', this).length;
      var imgHeight = $('img', this).height();
      var imgWidth = $('img', this).width();

      // $(this).height(imgHeight);

      // Add Placeholder if no image src is added
      if (img === 0) {
        // Add placeholder class if <img> does not exist
        $(this).addClass('placeholder');
      } else {
        // Make <figure> same height as <img>
        // $(this).height(imgHeight);
      }

      $(this).has('.device-none').each(function() {
        if (imgWidth < imgHeight) {
          $(this).addClass('portrait');
        } else {
          $(this).addClass('landscape');
        }
      });
    });
  });
})(jQuery);
