function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var list = ["Quentin BORRAS", "Hugo FRANCOIS", "Calixte HUCHBOURG", "Louis BLIN",
"Louis HOSPITAL", "Timeo CHARUEL", "Valentin LIONET-FOULIGNY", "Marion DUTILLEUR",
"Kyra BERNI", "Alice ERNST", "Garance DEVIGNON", "Diane-Laure EVRARD", 
"Antoine SAUTROT", "Tom GAUNY", "Thomas WINUM", "Faustine SCHREINER"]
var a = getRandomInt(16);
var html = `-> ${list[a]} <-`;
document.write(html);