console.log("---LIFE LEVEL---"); 

//const = nilai tetap (blok{}) ; let = nilai bisa berubah (blok{}) ; var = nilai bisa berubah (fungsi)
//object player dengan property di dalamnya (name, level, xp)
const player = {
    name: "Ditya",
    level: 1,
    xp: 0
};

//console.log(player);
//console.log(level);
//console.log(xp);

//XP setiap kegiatan
let XPcoding = 30;
let XPgym = 30;
let XPreading = 10;

//membuat fungsi supaya operasi bisa digunakan berkali-kali
function addXP(xp){
    player.xp += xp;
    while (player.xp >= 100){
       player.xp = player.xp-100;
       player.level++;
       console.log("Anda naik 1 level!");
       if (player.level == 5){
        console.log("Anda sudah mencapai level maksimum");
       }
    }
}

addXP(20);
addXP(80);
addXP(50);
addXP(250);
console.log(player);