/**
 * Author: Nemanja Tomin (nemanja93tomin@gmail.com)
 * Date: 5/31/2017
 * Time: 11:55 AM
 */
"use strict";
(function() {
    var mobileMenuTrigger = $('.navigation-trigger a:last-child');

    // var navigationLink = $('.main-header-inner').find('a');
    // var active = 0;
    // // console.log(navigationLink);

    /**
     * events
     */


    var headerContainer = $('.head-content-wrapper');
    var footerContainer = $('.footer-content-wrapper');

    headerContainer.load('header.html', function() {
        var mobileMenuTrigger = $('.navigation-trigger a:last-child');
        var navigationLink = $('.main-header-inner').find('a');
        var smallNavigationLink = $('.mobile-links-list-container').find('a');
        if(utilities.IsExisty(mobileMenuTrigger)){
            mobileMenuTrigger.click(function(ev) {
                var linksContainer = $('.mobile-links-list-container');
                var currentState = linksContainer.css('display');
                linksContainer.slideToggle();
                var icon = $(this).find('i');
                switch(currentState) {
                    case 'none':
                        icon.removeClass();
                        icon.addClass('fa fa-times');
                        return false;
                        break;
                    case 'block':
                        icon.removeClass();
                        icon.addClass('fa fa-bars');
                        break;
                }

            });
        }
        navigationLink.click(function() {
            if(!$(this).hasClass('local')){
                var target = $(this).attr('data-target');
                var index = $(this).parent().index();
                $('html, body').animate({
                    scrollTop: $(target).offset().top - 55
                }, 500 * (index + 1));
            }
        });
        smallNavigationLink.click(function() {
            if(!$(this).hasClass('local')){
                var target = $(this).attr('data-target');
                var index = $(this).parent().index();
                $('html, body').animate({
                    scrollTop: $(target).offset().top - 230
                }, 500 * (index + 1));
            }
        });

    });

    footerContainer.load('footer.html');

}());
