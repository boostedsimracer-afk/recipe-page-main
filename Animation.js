const preplink = document.querySelector('a[href="#PrepBox"]');
const prepbox = document.getElementById("PrepBox");

const Ingrelink = document.querySelector('a[href="#IngredientBox"]');
const Ingrebox = document.getElementById("IngredientBox")

const Instrulink = document.querySelector('a[href="#InstructionBox"]');
const Instrubox = document.getElementById("InstructionBox");

const nutrilink = document.querySelector('a[href="#NutritionBox"]');
const nutribox = document.getElementById("NutritionBox");
const caloriebox = document.getElementById("calories");


function makeGlowBasic(link, box, classname)
{
    link.addEventListener
    (
        "click", () => 
        {
            setTimeout(() => 
            {
                box.classList.add(classname);   
            }, 200);

            setTimeout(() => 
            {
                box.classList.remove(classname);
            }, 1200); 
        }
    )
}

makeGlowBasic(Ingrelink, Ingrebox, "glowbasic")
makeGlowBasic(Instrulink, Instrubox, "glowbasic")
makeGlowBasic(nutrilink, nutribox, "glowbasic")
makeGlowBasic(nutrilink, caloriebox, "glowbasic")

preplink.addEventListener
(
    "click", () => 
    { 
        setTimeout(() => 
        {
            prepbox.classList.add("glowprep");
        }, 200);
        
        setTimeout(() => 
        {
            prepbox.classList.remove("glowprep");
        }, 1200);
    }
)

