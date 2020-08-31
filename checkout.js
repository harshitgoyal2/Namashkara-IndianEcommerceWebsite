function firstname(){
    var first=document.getElementById("fn").value;
    var regix=/^[A-Za-z\s\']{3,10}$/;
    if(regix.test(first))
    {
        document.getElementById("firstprompt").style.color="Green";
        document.getElementById("firstprompt").innerHTML="Valid";
    }
    else
    {
        document.getElementById("firstprompt").style.color="Red";
        document.getElementById("firstprompt").innerHTML="Not Accepted";
        alert("Enter 3-10 characters of first name.");
    }
}

function lastname(){

    var middle=document.getElementById("ln").value;
    var regix=/^[A-Za-z\s\']{4,10}$/;
        if(regix.test(middle))
        {
                document.getElementById("middleprompt").style.color="Green";
                document.getElementById("middleprompt").innerHTML="Valid";
        }
        else
        {
                document.getElementById("middleprompt").style.color="Red";
                document.getElementById("middleprompt").innerHTML="Not Accepted";
                alert("Enter 4-10 characters of last name.");
        }
}

function mobnum(){

    var num = document.getElementById("num").value;
    var test1 = /^[0-9]{10}$/;
    if(test1.test(num))
    {
        document.getElementById("numprompt").style.color="Green";
        document.getElementById("numprompt").innerHTML="Valid";
    }
    else
    {
        document.getElementById("numprompt").style.color="Red";
        document.getElementById("numprompt").innerHTML="Not Accepted";
        alert("Enter a 10 digit phone no in format xxxxxxxxxx");
    }
}

function myfunc()
{
    alert("Your order has been successfully placed");
}
function myfunction(x)
{
    if(x==1)
    {
        document.getElementById("a").style.display="block";
        document.getElementById("b").style.display="none";
        document.getElementById("c").style.display="none";
        document.getElementById("b1").checked=false;
        document.getElementById("e1").checked=false;
        document.getElementById("d1").checked=false;
        document.getElementById("c1").checked=false;
    }
    else if(x==2)
    {
        document.getElementById("b").style.display="block";
        document.getElementById("a").style.display="none";
        document.getElementById("c").style.display="none";
        document.getElementById("a1").checked=false;
        document.getElementById("e1").checked=false;
        document.getElementById("d1").checked=false;
        document.getElementById("c1").checked=false;
    }
    else if(x==3)
    {
        document.getElementById("c").style.display="block";
        document.getElementById("a1").checked=false;
        document.getElementById("b1").checked=false;
        document.getElementById("d1").checked=false;
        document.getElementById("e1").checked=false;
        document.getElementById("a").style.display="none"; 
        document.getElementById("b").style.display="none";
    }
    else if(x==4)
    {
        document.getElementById("a1").checked=false;
        document.getElementById("b1").checked=false;
        document.getElementById("c1").checked=false;
        document.getElementById("e1").checked=false;
        document.getElementById("a").style.display="none"; 
        document.getElementById("b").style.display="none";
        document.getElementById("c").style.display="none";
    }
    else if(x==5)
    {
        document.getElementById("a1").checked=false;
        document.getElementById("b1").checked=false;
        document.getElementById("d1").checked=false;
        document.getElementById("c1").checked=false;
        document.getElementById("a").style.display="none"; 
        document.getElementById("b").style.display="none";
        document.getElementById("c").style.display="none";
    }
    else
        return;
}