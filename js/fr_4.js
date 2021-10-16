function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
var list = ["BERNI Kyra", "BOHN Julia", "BORRAS Quentin", "BREUIL Lali", "CATALOGNA Adzo", "CHARUEL Timéo", "CHAUDRON Esther", "CHOUKRI Kenza", "DEVIGNON Garance", "DUTILLEUL Marion", "DUWOYE Laurène", "FINANCE Lucas", "FLOCZEK Nina", "FRANCOIS Hugo", "GENARD Léo", "HALMA Mahé", "HUCBOURG Calixte", "JACQUART Louis", "KAPUSTA Lénaïc", "KRIST Gabin", "LECHAUDEL Maxence", "LIONET FOULIGNY Valentin", "LUCIEN Sacha", "LUGNIER Alice", "MARTIN Julien", "MICHEL Thomas", "PENDILLON CALAME Amauri", "TENET Enzo"]
var a = getRandomInt(28);
var html = `-> ${list[a]} <-`;
document.write(html);