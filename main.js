  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyCff_oKOtv6qQZYVZyFMS9OI9mYgtzthK4",
      authDomain: "quotes-blog.firebaseapp.com",
      databaseURL: "https://quotes-blog-default-rtdb.firebaseio.com",
      projectId: "quotes-blog",
      storageBucket: "quotes-blog.appspot.com",
      messagingSenderId: "402731795027",
      appId: "1:402731795027:web:702aa874bdb2d8577e3ca6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //FireBase


  window.onscroll = function () {
      scrollFunction()
  };

  function scrollFunction() {
      if (document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250) {
          document.getElementById("h_d").style.padding = "0.3% 0.3%";
          document.getElementById("h_d").style.backgroundColor = "coral";
          document.getElementById("h_d_h1").style.fontSize = "200%";
          document.getElementById("h_d_h2").style.fontSize = "100%";
      } else {
          document.getElementById("h_d").style.backgroundColor = "rgba(255, 255, 255, 0.2)";
          document.getElementById("h_d").style.position = "fixed";
          document.getElementById("h_d").style.padding = "10% 10%";
          document.getElementById("h_d_h1").style.fontSize = "200%";
          document.getElementById("h_d_h2").style.fontSize = "150%";
      }
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("myBar").style.width = scrolled + "%";
  }

