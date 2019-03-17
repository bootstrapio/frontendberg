(function() {
  'use strict';

  jQuery(document).ready(function($) {
    "use strict";

    // Banner Previews | Height of .group-media
    $('.banner-preview .group-media').each(function() {
      var deviceHeight = $('.media-item', this).height();
      $(this).height(.66 * deviceHeight);
    });

  });
})(jQuery);
