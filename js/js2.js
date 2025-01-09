function checkSNT(a){
    if(a<2) return true
    for(i=2;i<=Math.sqrt(a);i++)
        if(a%i==0) return false
    return true 
}
function kqSNT(a){
    if(checkSNT(a)==true)console.log(a,'la so nguyen to')
    else console.log(a,'khong phai so nguyen to')
}
kqSNT(7)
function cacSNT(m,n){
    for(i=m;i<=n;i++)
        if(checkSNT(i)==true) console.log(i," ");
}
cacSNT(9,15)