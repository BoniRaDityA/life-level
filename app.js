console.log("---LIFE LEVEL---"); 

//const = nilai tetap (blok{}) ; let = nilai bisa berubah (blok{}) ; var = nilai bisa berubah (fungsi)
//object player dengan property di dalamnya (name, level, xp)
const player = {
    name: "Ditya",
    level: 1,
    xp: 0,
    activities: ["Gym", "Coding", "Reading"]
};

//console.log(player);
//console.log(level);
//console.log(xp);

//XP setiap kegiatan
let XPcoding = 30;
let XPgym = 30;
let XPreading = 10;
let found = false;

//membuat fungsi supaya operasi bisa digunakan berkali-kali
function addXP(xp){
    player.xp += xp;
    while (player.xp >= 100){
       player.xp = player.xp-100;
       player.level++;
       console.log("Anda naik ke level " +player.level);
       if (player.level == 10){
        console.log("Anda sudah mencapai level maksimum");
       }
    }
}

addXP(20);
addXP(80);
addXP(50);
addXP(250);
console.log(player);
//mereference pada object player
console.log(player.activities);
console.log(player.activities[0]);
console.log(player.activities.length);

function doActivity(activitySearch){
    for (let activity of player.activities){
        if (activitySearch == activity){
            console.log("Ditya melakukan "+activity);
            found = true;
        }
    }
    if (found == false){
        console.log("Aktivitas tidak ditemukan");
    }
}

doActivity("Cooking");