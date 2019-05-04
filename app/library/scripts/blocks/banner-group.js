(function() {
  'use strict';

  jQuery(document).ready(function($) {
    'use strict';

    // Banner Previews | Height of .group-media
    $('*[class*=" banner-"] .group-media').each(function() {
      var deviceHeight = $('.media-item', this).height();
      $('.col', this).height(0.66 * deviceHeight);
    });
  });
})(jQuery);
