function wi(val){
    if (val>=20){
        return "20 or over";
    }
    if (val>=10){
        return "10 or over";
    }
    return "less than 10";
}
console.log(wi(10));
function testlogicaland(wal){
    if(wal<=50 && wal>=25){
        return "yes";
    }
    return "no"
}
testlogicaland(10);
function testlogicalOr(law){
if(law > 20 || law <10){
    return "outside";
}
return"inside";
}
testlogicalOr(15);
