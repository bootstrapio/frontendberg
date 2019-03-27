(function() {
  'use strict';

  jQuery(document).ready(function($) {
    "use strict";

    // Banner Previews | Height of .group-media
    $('*[class*=" banner-"] .group-media').each(function() {
      var deviceHeight = $('.media-image', this).height();
      $('.col', this).height(.66 * deviceHeight);
    });

  });
})(jQuery);
