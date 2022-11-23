


const bol=()=> Yaz(Cevir("s1")/Cevir("s2"))
const carp=()=> Yaz(Cevir("s1")*Cevir("s2"))
const topla=()=> Yaz(Cevir("s1")+Cevir("s2"))
const cıkar=()=> Yaz(Cevir("s1")-Cevir("s2"))
const Cevir=(id)=>Number(document.getElementById(id).value);


const Yaz=(sonuc)=> document.getElementById("sonuc").innerHTML=sonuc;

