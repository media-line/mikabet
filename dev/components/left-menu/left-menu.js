"use strict";

const $button = '.left-menu__menu-button';
const activeButton = 'left-menu__menu-button_active';
const $menu = '.left-menu';
const $buttonBlock = '.left__menu-button';


$(document).ready(function () {
    $($button).click(function () {
        $($menu).slideToggle();
        $($button).toggleClass(activeButton);
    });
});
