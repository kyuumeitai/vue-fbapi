(function () {
  function install(Vue, options) {
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0]
      if (d.getElementById(id)) { return }
      js = d.createElement(s)
      js.id = id
      js.src = "//connect.facebook.net/en_US/sdk.js"
      fjs.parentNode.insertBefore(js, fjs)
      console.log('setting fb sdk')
    }(document, 'script', 'facebook-jssdk'))

    window.fbAsyncInit = function onSDKInit() {
      FB.init(options)
      FB.AppEvents.logPageView()
      Vue.FB = FB
      window.dispatchEvent(new Event('fb-sdk-ready'))
    }
    Vue.FB = undefined
  }

  if (typeof exports === 'object') {
    module.exports = install
  } else if (typeof define === 'function' && define.amd) {
    /*global define*/
    define([], function () { return install })
  } else if (window.Vue) {
    window.Vue.use(install)
  }
})()
