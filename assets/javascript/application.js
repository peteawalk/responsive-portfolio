$(document).ready(function () {
    var scrollLink = $(".scroll");

    // Smooth scrolling instead of page jump on navbar clicks
    scrollLink.click(function (event) {
        event.preventDefault();
        $("body, html").animate({
            scrollTop: $(this.hash).offset().top // How far away the secton is from top of page
        }, 1500); //duration = 1000 msec

    });

    // Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        console.log(scrollbarLocation);

        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top - 20;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass("active");
                $(this).parent().siblings().removeClass("active");
            }
        });
    });


});