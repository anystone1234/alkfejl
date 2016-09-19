"use strict";
//Bevezetes
//console.log('Hello');
//let const

//Alap nyelvi elemek, tömbök és függvények feladat
const x = [1,2,54,6,-45,324,-3,-23,2];

function kivalogatas(arr, tulFn){
    const result = [];
    for(let i=0; i<arr.length; i++){
        if(tulFn(arr[i])){ //tulFn tulajdonság függvény átadása
            result.push(x[i]);
        }
    }
    return result;
}

console.log(kivalogatas(x,function(p){
    return p<0;
}));

//rövidebben
console.log(
    x.filter(function(p){
        return p<0;
    })
)

//még rövidebben
console.log(
    x.filter(p=>p<0)
)

//Objektumok 1.- 2. feladat 

const cim={
    varos:'Budapest',
    utca:'Pazmany Peter setany',
    hazszam:'1/c',
    toString: function(){
        return `${this.varos}, ${this.utca}`;
    }
};

cim.iranyitoszam='1117';
console.log(cim.toString())

//Objektumok 3. feladat
class Point{
    constructor(x,y){
        this._x=x;
        this._y=y;
    }

    setX(value){
        this._x=value;
    }

    set x(value){
        this._x=value;
    }

    get x(){
        return this._x;
    }
}

console.log(typeof Point)

class Circle extends Point{
    constructor(x,y,r){
        super (x,y); //ős konstruktor
        this._r=r;
    }
}

const p1=new Point(10,20);
// p1.z=30;
//p1.setX(100);
p1.x=100;
console.log(p1)
const c1=new Circle(30,50,50);
console.log(c1)
