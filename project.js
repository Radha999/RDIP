

function palindrome_func()
{
    var str = document.getElementById("string").value;
    var str = str.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
   // console.log("Function calleed");
    var len = str.length;
    var index=0
    var cnt=0
    if(len===0)
    {
        alert("Please enter a string");
        return;
    }
    else if(len%2===0)
    {
    cnt=len/2;
    var str1 = str.slice(cnt,(len));
    }
    else if(len===1)
    {
        document.write("It's a palindrome !!!")
        return true;
    }
    else 
    {
    cnt=(len-1)/2;
    var str1 = str.slice(cnt+1,(len));
    }
    var j=cnt-1;
    console.log(str1);
    for(var i=0;i<cnt;i++)
    {
        if(str[i]===str1[j])
        index=index+1;
        j--;
    }
    if(index===cnt)
    {
        document.write("It's a palindrome !!!")
        return true;
    }
    else if(index!==cnt)
    {
        document.write("It's not a palindrome :(")
        return false;
    }
}
function Random_numbers()
{
    return Math.floor(Math.random() * 1000) + 1;
}


function game_function()
{
   // console.log("Reached1")
    var a = Random_numbers();
    var b = Random_numbers();
    document.getElementById("player1").value=a;
    document.getElementById("player2").value=b;
    var res1=a%3;
    var res2=b%3;
   // console.log(res1 + " " + res2);
    var res="";
  //  console.log("Reached2")
    if(res1===res2)
    {
        document.getElementById("res").value="TIE";
        return "TIE";
    }
    else if((res1===0 && res2===1) || (res2===0 && res1===1))
    {
        document.getElementById("res").value="HUMAN";
         return "HUMAN";
    }
    else if((res1===2 && res2===1) || (res2===2 && res1===1))
    {
        document.getElementById("res").value = "NUCLEAR BOMB";
        return "NUCLEAR BOMB";
    }
    else if((res1===0 && res2===2) || (res2===0 && res1===2))
    {
        document.getElementById("res").value="NUCLEAR BOMB";
         return "NUCLEAR BOMB";
    }
    
    else 
    return "ERROR";
   // console.log("Reached3")
}


function func_anagram()
{
    var a = document.getElementById("string1").value;
    var b = document.getElementById("string2").value;
    var a = a.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var b = b.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
    var f_array = [];
    al=a.length;
    bl=b.length;
    if(al===0 || bl===0)
    {
        alert("please enter the strings in the 2 boxes, to check if they are anagrams.");
        return;
    }
    if(a===b)
    {
        document.write("Yes !! The 2 strings you have entered are anagrams");
        return true;
    }
    else if(al!==bl)
    {
        document.write("The 2 strings you have entered are not anagrams :(");
        return false;
    }
    else if(al===bl)
    {
        var f = al;
        for(var i=0;i<al;i++)
        {
            f_array.push(a.charCodeAt(i)-97);
        }
        console.log(f_array);
        for(var j=0;j<b.length;j++)
        {
            var cnt = (b.charCodeAt(j)-97);
            for(var p=0;p<al;p++)
            {
                if(f_array[p]===cnt)
                {
                    f--;
                    f_array.splice(p,1);
                   // console.log(f_array);
                    //console.log(cnt);
                    al--;
                    break;
                }
            }
        }
        //console.log(f);
        if(f===0)
        {
            document.write("Yes !! The 2 strings you have entered are anagrams");
            return true;
        }
        else
        {
            document.write("The 2 strings you have entered are not anagrams :(");
            return false; 
        }
    }
}

function form_validation()
{
    var name = document.getElementById("name").value;
    var num = document.getElementById("phone-num").value;
    var numbers = /^[0-9]+$/;
    var email_id=document.getElementById("email").value;
    if (name==null || name=="")
    {  
        alert("Name should not be blank. Please fill it.");  
        return false;  
    }
    else if(!isNaN(name.charAt(0)))
    {
        alert("First character of your name cannot be a number. Please re-enter.");
        return false;
    }
    else if(num==null || num=="")
    {
        alert("Phone number should be filled.");
        return false;
    }
    else if(!num.match(numbers))
    {
        alert("Please make sure you entered a valid phone number with digits");
        return false;
    }
    else if(num.length != 10)
    {
        alert("Phone number should be 10 digits in length");
        return false
    }
    else if(email_id==null || email_id=="")
    {
        alert("email cannot be blank. Please enter.");
        return false;
    }
    else if (! /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email_id))
    {
        alert("The email-id you have entered is not valid. Please enter correctly.");
        return false
    }
    else 
    {
    document.write("Form validated successfully.");
    return true;
    }
}


function displayval(num) 
{ 
    document.getElementById("display").value += num;
    return;
} 

var a=null,op=null,b=null;

function clickbutton ()
{
    var p = document.getElementById("display").value;
    if(op!=null)
    {
        var k = p;
        k.pop;
        document.getElementById("display").value = k;
        var newop = p[p.length-1];
        clickequalto();
        displayval(newop);
        p = document.getElementById("display").value;
    }
    console.log(p);
    a = p.split(p[p.length-1]);
    a=parseFloat(a);
    op = p[p.length-1];
    return ;
}

function clearval()
{
    document.getElementById("display").value = "";
}

function sq_rt()
{
    var k;
    k = document.getElementById("display").value;
    var p = Math.sqrt(k);
    p = (Math.round((p*1000 + 0.0001)))/1000;
    document.getElementById("display").value = p;
}

function abs_val()
{
    var k;
    k = document.getElementById("display").value;
    document.getElementById("display").value = Math.abs(k);
}

function clickequalto() 
{
    if(a==null)
    {
        alert("Insufficient arguments")
    }
    else
    {
        console.log(a);
        console.log(b);
        var p = document.getElementById("display").value;
        var k = p.split(op);
        b = k[1];
        b=parseFloat(b);
        if(op==="+")
        {
            add_func(a,b);
        }
        else if(op==="-")
        {
            subtract_func(a,b);
        }
        else if(op==="*")
        {
            product_func(a,b);
        }
        else if(op==="/")
        {
            division_func(a,b);
        }
        else if(op==="%")
        {
            percentage_func(a,b);
        }
    }
    op = null;
    a = null;
}

function add_func(x,y)
{
  var result=x+y;
  document.getElementById("display").value=result;
  return result;
}

function subtract_func(x,y)
{
    var result=x-y;
    document.getElementById("display").value=result;
    return result;
}

function product_func(x,y)
{
    var result=x*y;
    document.getElementById("display").value=result;
    return result;
}

function division_func(x,y)
{
    var result=x/y;
    document.getElementById("display").value=result;
    return result;
}

function percentage_func(x,y)
{
    var result=(x*y)/100;
    document.getElementById("display").value=result;
    return result;
}
