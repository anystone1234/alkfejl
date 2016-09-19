"use strict";
//időzítő függvény, tipikus példa aszinkron kódra
setTimeout(function(){
    console.log(1);//aszinkron hívás
}, 1000);

console.log(2);
//kiírja a kettest, majd 1 mp múlva az 1-est