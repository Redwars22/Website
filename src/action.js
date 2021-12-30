function setVisible() {
  document.getElementById("window").innerHTML +=
    "<style>.window{visibility:visible;}</style>";
}

function elHide() {
  document.getElementById("window").innerHTML +=
    "<style>.window{visibility:hidden;}</style>";
}

function curriculo() {
  setVisible();
  document.getElementById("window-content").innerHTML =
    "</style><iframe src='src/curriculo.pdf' frameborder='0'></iframe>";
}

function help() {
  setVisible();
  document.getElementById("window-content").innerHTML =
    "</styl><iframe src='pages/help.html' frameborder='0'></iframe>";
}

function about() {
  setVisible();
  document.getElementById("window-content").innerHTML =
    "<iframe src='pages/about.html' frameborder='0'></iframe>";
}
