(function () {
  var win = null;
  var url = null;
  var iframe = null;

  var launchNum = parseInt(prompt("What would you like to do? \n 1): Launch Minecraft \n 2): Launch Precision Client \n 3): Launch Nebula \n 4): Launch Flood History \n 5): Launch Google Drive Disguise \n (If you enter any other value, it will Launch a Cloaked Tab) \n Made by Cyberbullet"));

  switch (launchNum) {
    case 1:
      win = window.open();
      url = 'https://glittering-biscochitos-3d5a69.netlify.app/';
      iframe = win.document.createElement('iframe');
      iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
      iframe.src = url;
      win.document.body.appendChild(iframe);
      break;
    case 2:
      win = window.open();
      url = 'https://amazing-fox-fb6ecd.netlify.app/';
      iframe = win.document.createElement('iframe');
      iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
      iframe.src = url;
      win.document.body.appendChild(iframe);
      break;
    case 3:
      win = window.open();
      url = 'https://torch-future-archeology.glitch.me/';
      iframe = win.document.createElement('iframe');
      iframe.style = "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
      iframe.src = url;
      win.document.body.appendChild(iframe);
      break;
    case 4:
      var num = prompt("History flood amount: ");
      done = false;
      x = window.location.href;
      for (var i = 1; i <= num; i++) {
        history.pushState(0, 0, i == num ? x : i.toString());
        if (i == num) {
          done = true;
        }
      }
      if (done === true) {
        alert("History flood successful! " + window.location.href + " now appears in your history " + num + (num == 1 ? " time." : " times.") + " (Made by Cyberbullet)");
      }
      break;
    case 5:
      function gcloak() {
        var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = 'https://www.pngall.com/wp-content/uploads/9/Google-Drive-Logo-Transparent-180x180.png';
        document.title = 'My Drive - Google Drive';
        console.log(document.title);
        document.getElementsByTagName('head')[0].appendChild(link)
      };
      gcloak();
      setInterval(gcloak, 1000);
      break;
    default:
      url = prompt("Enter website url for cloaked tab \nMade by Cyberbullet");
      win =
