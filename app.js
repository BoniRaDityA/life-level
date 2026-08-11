console.log("---LIFE LEVEL---"); 

//const = nilai tetap (blok{}) ; let = nilai bisa berubah (blok{}) ; var = nilai bisa berubah (fungsi)
//object player dengan property di dalamnya (name, level, xp)
const player = {
    name: "Ditya",
    level: 1,
    xp: 0,
    completedActivities: 0,
    activities: [
        {name: "Gym", xp: 40},
        {name: "Coding", xp: 50},
        {name: "Reading", xp: 10}
    ],
    history: [] //menampung histori aktivitas yang sudah pernah dilakukan
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

//addXP(20);
//addXP(80);
//addXP(50);
//addXP(250);
//console.log(player);
//mereference pada object player
//console.log(player.activities);
//console.log(player.activities[0]);
//console.log(player.activities.length);

function doActivity(activitySearch){
    for (let activity of player.activities){
        if (activity.name == activitySearch){
            console.log("Ditya melakukan "+activity);
            return activity;
        }
    }
    if (found == false){
        console.log("Aktivitas tidak ditemukan");
    }
}

function findActivity(activitySearch){
    for (let activity of player.activities){
        if (activity.name == activitySearch){
            return activity; //mengembalikan object (sebuah function memberikan data kepada function lain)
        }
    }
    return null; //sudah mencari semua aktivitas, tapi tidak menemukan aktivitasnya
}

function completeActivity(activitySearch){
    const getActivity = findActivity(activitySearch);
    if (getActivity != null){
        addXP(getActivity.xp);
        player.completedActivities++;
        player.history.push(activitySearch);
    }
    else {
        console.log("Aktivitas tidak ditemukan");
    }
}

function showStatus(){
    console.log("==== LIFE LEVEL ====");
    console.log("Player : "+player.name+"\n"
        + "Level : "+player.level+"\n"
        + "XP : "+player.xp+"\n"
        + "Completed Actvities : "+player.completedActivities+"\n"
        + "History : "+player.history 
    );
}

doActivity("Cooking");
const getActivity = findActivity("Gym");
console.log(getActivity);

console.log(getActivity.name);
console.log(getActivity.xp);

//completeActivity("gym");
//console.log(player.xp);
//console.log(player.completedActivities);

showStatus();
completeActivity("Gym");
showStatus();
completeActivity("Coding");
showStatus();
completeActivity("Reading");
showStatus();
console.log("----------------");
completeActivity("Cooking");
showStatus();