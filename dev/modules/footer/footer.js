"use strict";

const $button = '.footer__up';

$(document).ready(function () {
    $($button).click(function () {
        $('html, body').animate({scrollTop: 0}, 1000);
    });
});
