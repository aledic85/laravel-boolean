/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

function dropMenu() {

  var me = $(this);

  me.siblings(".drop-menu").toggle();
}

function init() {

  var hambMenu = $(".hamb-menu");

  hambMenu.click(dropMenu);

  $(window).resize(function(){

    $(".drop-menu").css("display", "none");
  });
}



$(document).ready(init);
