// let x=[10,20,30]
// console.log(x);
// x.push(40);
// console.log(x)

// let x=[10,20,30]
//  console.log(x);
//  x=[...x,50]
//  console.log(x)
//filter fonk yazmak şart o da gzili fonk
//elemanlar i 


/* let  a=[10,20,30,40]
b=a.filter(function (i)
{
return i<30
})

console.log(b) */

/* let a=[10,20,30,40]
let b=[]
a.forEach(element => {
    if(element<30)
    {
        b.push(element)
    }   
});
console.log(b); */
/* 
//arrow function ile yapımı
let a=[10,20,30,40]
b=a.filter((i)=> i<30)
console.log(b) */

personel=[];
console.log(personel)
p1={"id":1,"ad":"Şamil"}
personel=[...personel,p1]
console.log(personel)

ogrenciler=[

    {"id":1, "ad":"Şamil"},
    {"id":2, "ad":"Kamil"}
]
yogrenci=  {"id":3, "ad":"ahmet"}
ogrenciler=[...ogrenciler,yogrenci]
console.log(ogrenciler)