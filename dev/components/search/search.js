"use strict";

const $button = ".search__button";
const $block = ".search__block";
const $close = ".search__close";
const blockActive = "search__block_active";

$(document).ready(function () {
    $($button).click(function () {
        $($block).toggleClass(blockActive);
    });

    $($close).click(function () {
        $($block).removeClass(blockActive);
    });
});
