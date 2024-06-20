// selected cite
function aler(elementName) {

        alert("city selected   " + elementName)
}
// end selected cite
// remouv
function myFunction() {
        var element = document.getElementById("demo");

        element.remove();
}
// end remouv

// convert
function stat(){
        // alert("loading weather report")

var type =document.getElementById("log");
var typeval=type.value
var temp1=document.querySelector("#temp1");
var temp2=document.querySelector("#temp2");
var temp3=document.querySelector("#temp3");
var temp4=document.querySelector("#temp4");
var temp5=document.querySelector("#temp5");
var temp6=document.querySelector("#temp6");
var temp7=document.querySelector("#temp7");
var temp8=document.querySelector("#temp8");
if (typeval=="2")
        {
                
                temp1.innerText = "75,2°";
                temp2.innerText = "64,4°";
                temp3.innerText = "80,6°";
                temp4.innerText = "66,2°";
                temp5.innerText = "69,8°";
                temp6.innerText = "60,8°";
                temp7.innerText = "78,8°";
                temp8.innerText = "69,8°";
                
                
                
                
            }
            else
            {
                temp1.innerText = "24°";
                temp2.innerText = "18°";
                temp3.innerText = "27°";
                temp4.innerText = "19°";
                temp5.innerText = "21°";
                temp6.innerText = "16°";
                temp7.innerText = "26°";
                temp8.innerText = "21°";
               
                
            }


}