$(document).ready(function() {
    // This targets anchor tags within figures that have the class related to your gallery
    $('figure a').magnificPopup({
      type: 'image',  // This is for image content; adjust if different content type
      gallery: {
        enabled: true  // Enables gallery mode
      },
      image: {
        titleSrc: function(item) {
          // Pulls the title from inside the anchor's title attribute
          return item.el.attr('title');
        }
      }
    });
});