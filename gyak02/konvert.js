"use strict";

const fs = require('fs');//file system

const path = 'gyak02/images/';
const db = new DataStore({
    filename: 'images.nedb',
    autoload: true,
});
//const files= readdir(path,) 
// a readdir aszinkron módon van megírva, undefined-dal tér vissza, const files szinkron értékadás lenne, ezért nem jó 

fs.readdir(path, function (err, files){
    if(err)throw err;//ha hiba van, akkor dobjunk errort
   // console.log(files)

    files.forEach(fileName=>{
        jimp.read(path+fileName, function(err,image){
            const{width, height}=image.bitmap;//kép szélességének és magasságának kiolvasása
            //rövidítése a const width=image.bitmap.width és const height=image.bitmap.height
            console.log(fileName, width, height);
            db.insert({fileName,width, height}, function(err, insertedIamge){
                console.log(insertedImage);
                image.resize(100,jimp.AUTO);
                image.write(`gyak02/converted/${insertedImage._id}.png`,function(err,insertedIamge){
                    if (err)throw err;
                    console.log(fileName,'atmeretezve es kiirva')
                })
            })
        })
    });
});
