'use strict';

const $block = '.tabs';
const $button = '.tabs__button';
const $text = '.tabs__text';
const $textActive = '.tabs__text_active';
const $content = '.tabs__content';
const buttonActive = 'tabs__button_active';
const contentActive = 'tabs__text_active';

let resizeTimer;

$(document).ready(function () {
    $($textActive).each(function (index, value) {
        let heightText;
        heightText = $(this).closest($block).find($text).eq(index).outerHeight();
        $(this).closest($block).find($content).css('height', heightText + 'px');
    });

    $(window).resize(function (e) {
        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(function() {

            $($textActive).each(function (index, value) {
                let heightText;
                heightText = $(this).closest($block).find($text).eq(index).outerHeight();
                $(this).closest($block).find($content).css('height', heightText + 'px');
            });
        }, 250);
    });

    $($button).click(function () {
        let index;
        let heightText;
        index = $(this).index();

        $(this).closest($block).find($button).removeClass(buttonActive);
        $(this).closest($block).find($text).removeClass(contentActive);

        $(this).addClass(buttonActive);
        $(this).closest($block).find($text).eq(index).addClass(contentActive);
        heightText = $(this).closest($block).find($text).eq(index).outerHeight();
        $($content).css('height', heightText + 'px');
    });
});
