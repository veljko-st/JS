//povrsina kvadra P=2(a*b + b*c + c*a)
var a;
var b;
var c;

document.getElementById("submit").onclick = function(){
    a=document.getElementById("a").value;
    b=document.getElementById("b").value;
    c=document.getElementById("c").value;
    document.getElementById("povrsina").innerHTML = pKvadra();
}
function pKvadra() {
    if (a<0 || b<0 || c < 0) {
        alert("Neka stranica ima negativan broj, pokusaj ponovo.");
    }
    else{
        var p=2*(a*b + b*c + c*a);
    }   
    return "Povrsina kvadra je: " + p;
}