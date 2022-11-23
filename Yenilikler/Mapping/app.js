// const numbers=[4,9,16,25]
// const number=[4,9,16,25]
// n1=numbers.map(function (i)
// {
//     return i*2;
// })
// console.log(n1)

let ogrenciler=[
    {  "id":1,"ad":"Şamil","soyad":"Yılmaz"},
    {  "id":2,"ad":"Yeşim","soyad":"Gerdan"}
]
var html=""
html+=ogrenciler.map((o)=>
{
    return `<li>${o.ad}</li>`
}).join(" ")

document.getElementById("liste").innerHTML=html



//console.log(ogrenciler)