/*----------------------------------------------------*/
/* Quote Loop
------------------------------------------------------ */

function fade($ele) {
    $ele.fadeIn(1000)
        .delay(3000)
        .fadeOut(1000, function () {
            var $next = $(this).next(".quote");
            fade(
                $next.length > 0 ? $next : $(this).parent().children().first()
            );
        });
}
fade($(".quoteLoop > .quote").first());

/*----------------------------------------------------*/
/* Navigation
------------------------------------------------------ */

$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $(".main_nav").addClass("sticky");
    } else {
        $(".main_nav").removeClass("sticky");
    }
});

// Mobile Navigation
$(".mobile-toggle").click(function () {
    if ($(".main_nav").hasClass("open-nav")) {
        $(".main_nav").removeClass("open-nav");
    } else {
        $(".main_nav").addClass("open-nav");
    }
});

$(".main_nav li a").click(function () {
    if ($(".main_nav").hasClass("open-nav")) {
        $(".navigation").removeClass("open-nav");
        $(".main_nav").removeClass("open-nav");
    }
});

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

jQuery(document).ready(function ($) {
    $(".smoothscroll").on("click", function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $target.offset().top,
                },
                800,
                "swing",
                function () {
                    window.location.hash = target;
                }
            );
    });
});

TweenMax.staggerFrom(".heading", 0.8, { opacity: 0, y: 20, delay: 0.2 }, 0.4);

//// Typing effect

// typing animation
(function ($) {
    $.fn.writeText = function (content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function () {
            if (current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 80);
    };
})(jQuery);

// input text for typing animation
var _CONTENT = [
    "Welcome to ZomBreX Entertainment",
    "Learn more about me",
    "Check out my projects",
    "Contact me",
];

// Current sentence being processed
var _PART = 0;

// Character number of the current sentence being processed
var _PART_INDEX = 0;

// Holds the handle returned from setInterval
var _INTERVAL_VAL;

// Element that holds the text
var _ELEMENT = document.querySelector("#text");

// Implements typing effect
function Type() {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX + 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX++;

    // If full sentence has been displayed then start to delete the sentence after some time
    if (text === _CONTENT[_PART]) {
        clearInterval(_INTERVAL_VAL);
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Delete, 50);
        }, 1000);
    }
}

// Implements deleting effect
function Delete() {
    var text = _CONTENT[_PART].substring(0, _PART_INDEX - 1);
    _ELEMENT.innerHTML = text;
    _PART_INDEX--;

    // If sentence has been deleted then start to display the next sentence
    if (text === "") {
        clearInterval(_INTERVAL_VAL);

        // If last sentence then display the first one, else move to the next
        if (_PART == _CONTENT.length - 1) _PART = 0;
        else _PART++;
        _PART_INDEX = 0;

        // Start to display the next sentence after some time
        setTimeout(function () {
            _INTERVAL_VAL = setInterval(Type, 100);
        }, 200);
    }
}

// Start the typing effect on load
_INTERVAL_VAL = setInterval(Type, 100);
