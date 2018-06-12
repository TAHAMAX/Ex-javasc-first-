
function myFunction1() 
{	
	var x = 10;
    alert("\n 10")
}
//////////////////////////////////////////////////////////////
var $nom = "Doe";
var $prenom = "john";
var $ville = "New_york";
function myFunction2() 
{	
    alert("Nom : " + $nom+"\nPrenom : "+$prenom+"\nVille : "+$ville )
}
//////////////////////////////////////////////////////////////
function myFunction3() 
{
    var  person=prompt("Please enter your name");	
    alert("Bonjour "+person)  
}
////////////////////////////////////////////////////////////////
function myFunction4() 
{
	var $nom = prompt("Please enter your name");
	var $prenom = prompt("Please enter your prenom");
	var $ville = prompt("Please enter your ville");
	alert("Nom : " + $nom+"\nPrenom : "+$prenom+"\nVille : "+$ville )
}
/////////////////////////////////////////////////////////////////

function myFunction5() 
{
	var $num1 = prompt("Please enter Premier number ");
	var $num2 = prompt("Please enter Deuxieme number ");
    var $resultat = parseInt($num1);
    var ss = $resultat * $num2 ;
    alert($num1+" * "+$num2+" = " + ss)
}
////////////////////////////////////////////////////////////////////
function myFunction7() 
{
	var $num1 = prompt("Please enter ta pointure ");
	var $num2 = prompt("Please enter ton année ");
    var resultat = ((($num1 * 2) +5)*50)-$num2 + 1766;
    alert(resultat)
}
////////////////////////////////////////////////////////////////////
function myFunction8()
{
	var $num1 = prompt("Please enter your age ");
	if ($num1 > 18)
  {
    return alert("Vous êtes majeur");
  } else 
  {
    return alert("Vous êtes mineur");
  }
}

