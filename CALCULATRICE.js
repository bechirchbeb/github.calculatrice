function getsymbole(val)
{
    document.getElementById("resultat").value +=val;
}
function effacer(val)
{
    document.getElementById("resultat").value ="";
}
function calculer(val)
{
    let a = document.getElementById("resultat").value ;
    let b=eval(a);
    document.getElementById("resultat").value=b ;

}