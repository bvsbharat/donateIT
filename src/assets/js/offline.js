(function () {
  'use strict';


  //After DOM Loaded
  document.addEventListener('DOMContentLoaded', function (event) {
    //On initial load to check connectivity
    if (!navigator.onLine) {
      updateNetworkStatus();
    }

    window.addEventListener('online', updateNetworkStatus, false);
    window.addEventListener('offline', updateNetworkStatus, false);
  });

  //To update network status
  function updateNetworkStatus() {

    // ,
    // ,
    // header

    var headerElement = document.querySelector('header');
    var menuElement = document.querySelector('.menu__header');
    var container = document.querySelector('.container');
    var metaTagTheme = document.querySelector('meta[name=theme-color]');


    if (navigator.onLine) {
      toast('App is online');
      metaTagTheme ? metaTagTheme.setAttribute('content', '#092756') : '';
      headerElement ? headerElement.classList.remove('app__offline') : '';
      menuElement ? menuElement.classList.remove('app__offline') : '';
      container ? container.classList.remove('app__offline') : '';
    } else {
      toast('App is offline');
       metaTagTheme ? metaTagTheme.setAttribute('content', '#6b6b6b') : '';
      headerElement ? headerElement.classList.add('app__offline') : '';
      menuElement ? menuElement.classList.add('app__offline') : '';
      container ? container.classList.add('app__offline') : '';
    }
  }
})();
