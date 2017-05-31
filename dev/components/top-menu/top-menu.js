"use strict";

import './top-menu.scss';

import isMobile from 'ismobilejs';

const $button = '.top-menu__menu-button';
const activeButton = 'top-menu__menu-button_active';
const $menu = '.top-menu';
const $buttonBlock = '.header__menu-button';


$(document).ready(function () {
    if (isMobile.phone) {
        let menu = $($menu).clone();
        $($menu).remove();
        menu.insertAfter($buttonBlock);
    }

    $($button).click(function () {
        $($menu).slideToggle();
        $($button).toggleClass(activeButton);
    });
});
