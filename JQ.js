$("a").attr("target", "_blank");//task 1

$(".head").css("background-color", "green");//task 2
$(".inner").css("font-size", "35px");

let h = document.getElementById("11");//task 3
let d = document.getElementById("22");
$("#11").text(h.innerHTML + " " + d.innerHTML);
let h1 = document.getElementById("1");
let d1 = document.getElementById("2");
$("#1").text(h1.innerHTML + " " + d1.innerHTML);

let checkbox = [$("#check1"), $("#check2"), $("#check3"), $("#check4"), $("#check5"), $("#check6")];//task 4
function Check()
{
    let increase = 0;
    for(let i = 0; i < 6; i++)
    {
        if(checkbox[i].is(":checked"))
        {
            increase++;
        }
        if(increase == 3)
        {
            for(let j = 0; j < 6; j++)
            {
                checkbox[j].prop("checked", false);
            }
            break;
        }
    }
    return false;
}
Check();
for(let i = 0; i < 6; i++){checkbox[i].on("change", Check)}