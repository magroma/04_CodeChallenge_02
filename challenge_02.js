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

let gender = prompt("Ist die Person männlich (m) oder weiblich (w)?");
let name = prompt("Wie heißt die Person, \ndie etwas trinken möchte?");
let age = parseInt(prompt("Wie alt ist " + name + "?"));
    

switch (true) {
    case (age >= 0 && age <= 5):
    //case (age <= 5):
        console.log("Für " + name + " haben wir Milch und Wasser im Angebot");
        break;
    case (age >= 6 && age <= 12 && gender == "m"):
    //case (age <= 12 && gender == "m"):
        console.log(name + " ist " + age + " und trinkt Saft, Wasser und Limo");
        break;
    case (age >= 6 && age <= 12 && gender == "w"):
    //case (age <= 12 && gender == "m"):
        console.log(name + " ist " + age + " und trinkt Saft, Wasser und Limo");
        break;
    //case (age >= 13 && age <= 17):
    case (age >= 13 && age <= 17 && gender == "m"):
        console.log(name + " ist " + age + " und trinkt Cola, Wasser, Saft, Limo und Kaffee");
        break;
    case (age >= 13 && age <= 17 && gender == "w"):
        console.log(name + " ist " + age + " und trinkt Cola, Wasser, Saft, Limo und Kaffee");
        break;
    case (age >= 18 && age <=25 && gender == "m"):    
        console.log(name + " ist " + age + " und trinkt Alkopops, Bier und gesunde Getränke");
        break;
    case (age >= 18 && age <=25 && gender == "w"):    
        console.log(name + " ist " + age + " und trinkt Alkopops, Bier und gesunde Getränke");
        break;
    case (age >= 26 && age <= 90 && gender == "m"):
        console.log(name + " ist " + age + " und trinkt Bier, Wein und was er will");
        break;
    case (age >= 26 && age <= 90 && gender == "w"):
        console.log(name + " ist " + age + " und trinkt Bier, Wein und was sie will");
        break;
    case (age > 90 && gender == "m"):
        /*if (gender == "männlich") 
        {
            console.log("Opa " + name + " ist " + age + " und kann trinken was er will, \nwenn er es verträgt");
        } else 
        {
            console.log("Oma " + name + " ist " + age + " und kann trinken was sie will, \nwenn sie es verträgt");
        }*/
        console.log("Opa " + name + " ist " + age + " und kann trinken was er will, \nwenn er es verträgt");
        break;
    case (age > 90 && gender == "w"):
        console.log("Oma " + name + " ist " + age + " und kann trinken was sie will, \nwenn sie es verträgt");
        break;

    default:
        console.log("Wenn nicht alles ausgefüllt ist gibt's auch nix zu trinken!")
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