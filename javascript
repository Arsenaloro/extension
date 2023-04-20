(function() {
  var password = prompt("Por favor ingrese la contraseña:");
  if (password === "@") {
    var selection = prompt("Por favor seleccione una opción:\n1. Minecraft\n2. Nebula\n3. Inundar historial\n4. Ocultar pestaña");
    switch(selection) {
      case "1":
        win = window.open();
        url = 'https://glittering-biscochitos-3d5a69.netlify.app/';
        iframe = win.document.createElement('iframe');
        iframe.style="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
        iframe.src = url;
        win.document.body.appendChild(iframe);
        iframe.src = url;
        win.document.body.appendChild(iframe);
        break;
      case "2":
        win = window.open();
        url = 'https://torch-future-archeology.glitch.me/';
        iframe = win.document.createElement('iframe');
        iframe.style="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
        iframe.src = url;
        win.document.body.appendChild(iframe);
        iframe.src = url;
        win.document.body.appendChild(iframe);
        break;
      case "3":
        var num = prompt("Cantidad de inundación de historial:");
        hecho = false;
        x = window.location.href;
        for (var i = 1; i <= num; i++) {
          history.pushState(0, 0, i == num ? x : i.toString());
          if (i == num) {
            hecho = true
          }
        }
        if (hecho === true) {
          alert("¡Inundación de historial exitosa! " + window.location.href + " ahora aparece en tu historial " + num + (num == 1 ? " vez." : " veces."));
        }
      case "4":
        javascript:function gcloak() { var link = document.querySelector("link[rel*='icon']") || document.createElement('link');link.type = 'image/x-icon';link.rel = 'shortcut icon';link.href = 'https://www.pngall.com/wp-content/uploads/9/Google-Drive-Logo-Transparent-180x180.png';document.title = 'La meva unitat: Google Drive';console.log(document.title);document.getElementsByTagName('head')[0].appendChild(link) };gcloak();setInterval(gcloak, 1000);
        break;
        case 5 
        win = window.open();
        url = 'https://discord.arsenaloro.repl.co/';
        iframe = win.document.createElement('iframe');
        iframe.style="position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;";
        iframe.src = url;
        win.document.body.appendChild(iframe);
        iframe.src = url;
        win.document.body.appendChild(iframe);
        break;
        
      default:
        alert("Selección no válida!");
    }
  } else {
    alert("¡Error al cargar!");
  }
})();


