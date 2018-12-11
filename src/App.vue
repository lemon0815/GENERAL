<template>
  <div id="app">
    <!-- <the-nav-menu/> -->
    <input id="share_button" type="button" value="share to facebook" />
  </div>
</template>

<script>
import TheNavMenu from './components/TheNavMenu.vue'
export default {
  name: 'App',
  components: {
    TheNavMenu
  }
}

        function popupwindow(url, title, w, h) {
            let wLeft = window.screenLeft ? window.screenLeft : window.screenX;
            let wTop = window.screenTop ? window.screenTop : window.screenY;
 
            let left = wLeft + (window.innerWidth / 2) - (w / 2);
            let top = wTop + (window.innerHeight / 2) - (h / 2);
            return window.open(url, title, 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);
        }
        window.onload = function () {
            document.getElementById('share_button').onclick = function(){
                var shareUrl = "http://www.facebook.com/sharer/sharer.php?u=https://www.google.com";
                popupwindow(shareUrl, 'Facebook', 600, 400);
            }
        }

  window.fbAsyncInit = function() {
    FB.init({
      appId            : 'your-app-id',
      autoLogAppEvents : true,
      xfbml            : true,
      version          : 'v2.10'
    });
    FB.AppEvents.logPageView();
  };
 
  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));

</script>