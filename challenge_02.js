/*********   CODE CHALLENGE 02 **********/

/*
Geben Sie über eine Prompt-Anforderung einen Namen ein
Geben Sie über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */

/********** Switch|Case ***********/

let name = prompt("Wie heißt die Person, \ndie etwas trinken möchte?");
let age = parseInt(prompt("Wie alt ist Person die etwas trinken möchte?"));

switch (true) {
    case (age >= 0 && age <= 5):
    //case (age <= 5):
        console.log(name + " trinkt Milch");
        break;
    //case (age >= 6 && age <= 12):
    case (age <= 12):
        console.log(name + " trinkt Saft");
        break;
    //case (age >= 13 && age <= 17):
    case (age <= 17):
        console.log(name + " trinkt Cola");
        break;
    case (age > 18):    
        console.log(name + " trinkt Wein");
        break;

    default:
        console.log("kein Alter, kein Getränk!")
        break;
}


/*********** IF ELSE *************/
/*
let name = prompt("Wie heißt die Person, \ndie etwas trinken möchte?");
let age = parseInt(prompt("Wie alt ist Person die etwas trinken möchte?"));

if (age >= 0 && age <=5) 
{
    console.log(name + " trinkt Milch");
} else if (age >= 6 && age <=12) 
{
    console.log(name + " trinkt Saft");
} else if (age >= 13 && age <=17) 
{
    console.log(name + " trinkt Cola")
} else {
    console.log(name + " trinkt Wein")
}
*/