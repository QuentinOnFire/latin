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
    var b = document.getElementById("center");
    b.remove();
    document.write(`
    <link rel="stylesheet" href="css/style.css">
    <title>Choix Billet Latin</title>
    <div class="center" id="center">
        <h2>Pour le billet de Latin</h2>
        <form action="#" id="random">
            <input type="submit" value="--Choisir--" id="random">
        </form>
        <p id="inject" class="reponse">${html}</p>
    </div>
    <script src="js/app.js"></script>
    `);
});
