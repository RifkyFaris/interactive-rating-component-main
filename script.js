var x=0;
function onclick1(){
    document.getElementById('c1').style.background="white"
    document.getElementById('number1').style.color="hsl(216, 12%, 8%)"
    document.getElementById('c2').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c3').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c4').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c5').style.background="hsl(223, 4%, 37%)"
    x=document.getElementById('c1').innerText
    
   
    
    
}
function onclick2(){
    document.getElementById('c2').style.background="white"
    document.getElementById('number2').style.color="hsl(216, 12%, 8%)"
    document.getElementById('c1').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c3').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c4').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c5').style.background="hsl(223, 4%, 37%)"
    x=document.getElementById('c2').innerText
    
}
function onclick3(){
    document.getElementById('c3').style.background="white"
    document.getElementById('number3').style.color="hsl(216, 12%, 8%)"
    document.getElementById('c2').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c1').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c4').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c5').style.background="hsl(223, 4%, 37%)"
    x=document.getElementById('c3').innerText
    
}
function onclick4(){
    document.getElementById('c4').style.background="white"
    document.getElementById('number4').style.color="hsl(216, 12%, 8%)"
    document.getElementById('c2').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c3').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c1').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c5').style.background="hsl(223, 4%, 37%)"
    x=document.getElementById('c4').innerText
    
}
function onclick5(){
    document.getElementById('c5').style.background="white"
    document.getElementById('number5').style.color="hsl(216, 12%, 8%)"
    document.getElementById('c2').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c3').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c4').style.background="hsl(223, 4%, 37%)"
    document.getElementById('c1').style.background="hsl(223, 4%, 37%)"
    x=document.getElementById('c5').innerText
    
}
function thank(){
    
   
    if(x!=0){
        document.getElementById('container').style.display="none"
        document.getElementById('container1').style.display="block"
        document.getElementById('you').innerHTML="You selected "+x+" out of 5"
    }else{
        alert("Select Rating")
        
    }
    
}