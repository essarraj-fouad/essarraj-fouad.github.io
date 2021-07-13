jQuery(document).ready(function($){
    var $faqItems = $('#faqs .faq');
    if( window.location.hash != '' ) {
        var getFaqFilterHash = window.location.hash;
        var hashFaqFilter = getFaqFilterHash.split('#');
        if( $faqItems.hasClass( hashFaqFilter[1] ) ) {
            $('.grid-filter li').removeClass('activeFilter');
            $( '[data-filter=".'+ hashFaqFilter[1] +'"]' ).parent('li').addClass('activeFilter');
            var hashFaqSelector = '.' + hashFaqFilter[1];
            $faqItems.css('display', 'none');
            if( hashFaqSelector != 'all' ) {
                $( hashFaqSelector ).fadeIn(500);
            } else {
                $faqItems.fadeIn(500);
            }
        }
    }

    $('.grid-filter a').on( 'click', function(){
        $('.grid-filter li').removeClass('activeFilter');
        $(this).parent('li').addClass('activeFilter');
        var faqSelector = $(this).attr('data-filter');
        $faqItems.css('display', 'none');
        if( faqSelector != 'all' ) {
            $( faqSelector ).fadeIn(500);
        } else {
            $faqItems.fadeIn(500);
        }
        return false;
   });
});