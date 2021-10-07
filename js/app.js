function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
document.getElementById("random").addEventListener("submit", function () {
    var list = ["Quentin BORRAS", "Hugo FRANCOIS", "Calixte HUCHBOURG", "Louis BLIN",
    "Louis HOSPITAL", "Timeo CHARUEL", "Valentin LIONET-FOULIGNY", "Marion DUTILLEUR",
    "Kyra BERNI", "Alice ERNST", "Garance DEVIGNON", "Diane-Laure EVRARD",
     "Lali BREUIL" ,"Antoine SAUTROT", "Tom GAUNY", "Thomas WINUM", "Faustine SCHREINER"]
    var a = getRandomInt(15) + 1;
    var html = `-> ${list[a]} <-`;
    document.getElementById("inject").innerHTML = html
});
