let tempMemory=0.0;
let opratorNumber=0;
let ans=0.0;
let hasOprator=0;
let hasNumber=0;
let hasDot=0;
let numOfDigitAfterDot=0;
let history =[];
let keyBoard=true;

const btnAC=document.getElementById("calcButtonAC");
const btnPlus =document.getElementById("calcButtonPlus");
const btnEqual =document.getElementById("calcButtonEqual");
const btnCut =document.getElementById("calcButtonCut");
const btnDivision =document.getElementById("calcButtonDivision");
const btnSign =document.getElementById("calcButtonSign");
const btnMul =document.getElementById("calcButtonMul");
const btnMinus =document.getElementById("calcButtonMinus");
const btnPers =document.getElementById("calcButtonPers");
const btnDot =document.getElementById("calcButtonDot");

const btn0=document.getElementById("calcButton0");
const btn1=document.getElementById("calcButton1");
const btn2=document.getElementById("calcButton2");
const btn3=document.getElementById("calcButton3");
const btn4=document.getElementById("calcButton4");
const btn5=document.getElementById("calcButton5");
const btn6=document.getElementById("calcButton6");
const btn7=document.getElementById("calcButton7");
const btn8=document.getElementById("calcButton8");
const btn9=document.getElementById("calcButton9");
const btnKeyBoard=document.getElementById("keyBoard");

const btns=[btn0,btn1,btn2,btn3,btn4,btn5,btn6,btn7,btn8,btn9];

const display1=document.getElementById("display1");display1.innerText="";
const display2=document.getElementById("display2");display2.innerText="";

btnAC.addEventListener("click",e=>{
    tempMemory=0;
    ans=0;
    hasNumber=0;
    hasOprator=0;
    hasDot=0;
    numOfDigitAfterDot=0;
    display1.innerText="";
    display2.innerText="";
});

const handleOprators=(op)=>{
    hasDot=0;
    numOfDigitAfterDot=0;
    if(hasNumber)
    {
        if(hasOprator)  //11
        {
            switch(opratorNumber)
            {
                case 0: //+
                    ans+=tempMemory;
                    tempMemory=0;
                    hasNumber=0;
                    hasOprator=1;
                    opratorNumber=op;
                    break;
                case 1:
                    ans-=tempMemory;
                    tempMemory=0;
                    hasNumber=0;
                    hasOprator=1;
                    opratorNumber=op;
                    break;
                case 2:
                    ans*=tempMemory;
                    tempMemory=0;
                    hasNumber=0;
                    hasOprator=1;
                    opratorNumber=op;
                    break;
                case 3:
                    ans/=tempMemory;
                    tempMemory=0;
                    hasNumber=0;
                    hasOprator=1;
                    opratorNumber=op;
                    break;
                case 4:
                    ans=tempMemory;
                    tempMemory=0;
                    hasNumber=0;
                    hasOprator=1;
                    opratorNumber=op;
                    break;


            }
        }
        else//10
        {
            ans=tempMemory;
            tempMemory=0;
            hasOprator=1;
            hasNumber=0;
            opratorNumber=op;
        }
    }
    else
    {
        if(hasOprator)//01
        {
            opratorNumber=op;

        }
        else//00
        {
            opratorNumber=op;
            hasOprator=1;
        }
    }

    switch(op)
    {
        case 0:
            display1.innerText="+";
        break;
        case 1:
            display1.innerText="-";
        break;
        case 2:
            display1.innerText="x";
        break;
        case 3:
            display1.innerText="/";
        break;

    }

    
}

btnPlus.addEventListener("click",e=>{handleOprators(0);});
btnMinus.addEventListener("click",e=>{handleOprators(1)});
btnMul.addEventListener("click",e=>{handleOprators(2)});
btnDivision.addEventListener("click",e=>{handleOprators(3)});

btnSign.addEventListener("click",e=>{
    hasDot=0;
    numOfDigitAfterDot=0;
    if(hasNumber)
    {
        if(hasOprator)  //11
        {
            switch(opratorNumber)
            {
                case 0: //+
                    tempMemory=-tempMemory;
                    
                    break;
                case 1:
                    tempMemory=-tempMemory;
                    
                    break;
                case 2:
                    tempMemory=-tempMemory;
                    
                    break;
                case 3:
                    tempMemory=-tempMemory;
                    
                    break;
                case 4:
                    ans=-ans;
                    
                    tempMemory=ans;
                    
                    break;

            }
            
        }
        else//10
        {
            tempMemory=-tempMemory;
            
        }
        display1.innerText=tempMemory;
    }
    else
    {
        if(hasOprator)//01
        {
            //do nothing

        }
        else//00
        {
            //do nothing
        }
    }
    
    
});
btnCut.addEventListener("click",e=>{
    
    if(hasNumber)
    {
        if(hasDot)
        {
            tempMemory*=Math.pow(10,numOfDigitAfterDot);
        }
        if(hasOprator)  //11
        {
            switch(opratorNumber)
            {
                case 0: //+
                    tempMemory=(tempMemory-tempMemory%10)/10;
                    break;
                case 1:
                    tempMemory=(tempMemory-tempMemory%10)/10;
                    break;
                case 2:
                    tempMemory=(tempMemory-tempMemory%10)/10;
                    break;
                case 3:
                    tempMemory=(tempMemory-tempMemory%10)/10;
                    break;
                case 4:
                    numOfDigitAfterDot++;
            }
        }
        else//10
        {
            tempMemory=(tempMemory-tempMemory%10)/10;
            hasOprator=0;
            hasNumber=1;
            opratorNumber=2;
        }
        if(hasDot)
        {
            if(numOfDigitAfterDot>=1)
            {
                tempMemory/=Math.pow(10,--numOfDigitAfterDot);
            }
            else
            {
                hasDot=0;
            }
            
        }
        display1.innerText=tempMemory;
        display2.innerText="";
    }
    else
    {
        if(hasOprator)//01
        {
            hasNumber=0;
            if(opratorNumber==4)
            {
                if(hasDot)
                {
                    ans*=Math.pow(10,numOfDigitAfterDot);
                    numOfDigitAfterDot--;
                }   
                ans=(ans-ans%10)/10;
                tempMemory=ans;
                if(hasDot)
                {
                    ans/=Math.pow(10,numOfDigitAfterDot);
                }
                
                display1.innerText=tempMemory;
                display2.innerText="";
            }
        }
        else//00
        {
            //do no
        }
    }
    
    
});
btnPers.addEventListener("click",e=>{
    
    display1.innerText=tempMemory;
    if(hasNumber)
    {
        if(hasOprator)  //11
        {
            switch(opratorNumber)
            {
                case 0: //+
                    tempMemory=(tempMemory*ans)/100;
                    hasNumber=1;
                    hasOprator=1;
                    break;
                case 1:
                    tempMemory=(tempMemory*ans)/100;
                    hasNumber=1;
                    hasOprator=1;
                    
                    break;
                case 2:
                    tempMemory=(tempMemory)/100;
                    hasNumber=1;
                    hasOprator=1;
                    
                    break;
                case 3:
                    tempMemory=(tempMemory)/100;
                    hasNumber=1;
                    hasOprator=1;
                    
                    break;
                case 4:
                    tempMemory=ans;
                    ans=0;
                    tempMemory=tempMemory/100;
                    hasNumber=0;
                    hasOprator=1;
                    break;
            }
        }
        else//10
        {
            tempMemory=tempMemory/100;
            hasOprator=0;
            hasNumber=1;
            
        }
    }
    else
    {
        if(hasOprator)//01
        {
            tempMemory/=100;
            hasNumber=1;
           
        }
        else//00
        {
            //do nothing
            
        }
    }
    let str=ans.toString();
    let find=false;
    let i=0;

    while(i<str.length)
    {
        if(str.charAt(i)==='.')
        {
            find=true;
            break;

        }
        i++;
    }
    if(find)
    {
        hasDot=1;
        numOfDigitAfterDot=str.length-i;
    }
    else
    {
        hasDot=0;
        numOfDigitAfterDot=0;
    }
    display1.innerText=tempMemory+"(%)";
});
btnDot.addEventListener("click",e=>{
    if(!hasDot)
    {
        hasDot=1;
        if(!hasNumber)
        {
            tempMemory=0;
            hasNumber=1;
        }
        display1.innerText=tempMemory+".";
    }
});
btnEqual.addEventListener("click",e=>{
    if(hasNumber)
    {
        if(hasOprator)  //11
        {
            switch(opratorNumber)
            {
                case 0: //+
                    
                    ans+=tempMemory;
                    tempMemory=ans;
                    hasNumber=1;
                    hasOprator=1;
                    opratorNumber=4;
                    
                    break;
                case 1:
                    ans-=tempMemory;
                    tempMemory=ans;
                    hasNumber=1;
                    hasOprator=1;
                    opratorNumber=4;
                    
                    break;
                case 2:
                    ans*=tempMemory;
                    tempMemory=ans;
                    hasNumber=1;
                    hasOprator=1;
                    opratorNumber=4;
                    
                    break;
                case 3:
                    ans/=tempMemory;
                    tempMemory=ans;
                    hasNumber=1;
                    hasOprator=1;
                    opratorNumber=4;
                    
                    break;
                case 4:
                    ans=tempMemory;
                    tempMemory=ans;
                    hasNumber=1;
                    hasOprator=1;
                    break;


            }
        }
        else//10
        {
            ans=tempMemory;
            tempMemory=ans;
            hasOprator=1;
            hasNumber=1;
            opratorNumber=4;
            
        }
    }
    else
    {
        if(hasOprator)//01
        {
            opratorNumber=4;
            hasOprator=0;
           
        }
        else//00
        {
            opratorNumber=4;
            
        }
    }

    let str=ans.toString();
    let find=false;
    let i=0;

    while(i<str.length)
    {
        if(str.charAt(i)==='.')
        {
            find=true;
            break;

        }
        i++;
    }
    if(find)
    {
        hasDot=1;
        numOfDigitAfterDot=str.length-i-1;
    }
    else
    {
        hasDot=0;
        numOfDigitAfterDot=0;
    }

    
    display1.innerText="=";
    display2.innerText=ans;
    
});

for(let i=0;i<10;i++)
{
    let btn=btns[i];
    btn.addEventListener("click",e=>{
    
    if(hasDot)
    {
        tempMemory*=Math.pow(10,numOfDigitAfterDot);
    }
    
    if(hasNumber)
    {
        if(hasOprator)  //11
        {
            switch(opratorNumber)
            {
                case 0: //+
                    tempMemory=tempMemory*10+i;
                    hasNumber=1;
                    hasOprator=1;
                break;
                case 1:
                    tempMemory=tempMemory*10+i;
                    hasNumber=1;
                    hasOprator=1;
                break;
                case 2:
                    tempMemory=tempMemory*10+i;
                    hasNumber=1;
                    hasOprator=1;
                break;
                case 3:
                    tempMemory=tempMemory*10+i;
                    hasNumber=1;
                    hasOprator=1;
                break;
                case 4:
                    //do nothing
                    if(hasDot)numOfDigitAfterDot--;
                break;
            }
        }
        else//10
        {
            tempMemory=tempMemory*10+i;
            hasOprator=0;
            hasNumber=1;
            
        }
        if(hasDot)numOfDigitAfterDot++;
    }
    else
    {
        if(hasOprator)//01
        {
            tempMemory=i;
            hasNumber=1;
            hasOprator=1;
        }
        else//00
        {
            tempMemory=i;
            hasOprator=0;
            hasNumber=1;
        }
    }
    if(hasDot)
    {
        tempMemory/=Math.pow(10,numOfDigitAfterDot);
    }
    display1.innerText=tempMemory;
});
}

btnKeyBoard.addEventListener("click",e=>
{
    if(keyBoard)
    {
        keyBoard=false;
        btnKeyBoard.style.backgroundColor="rgb(70, 76, 76)";
    }
    else
    {
        keyBoard=true;
        btnKeyBoard.style.backgroundColor="rgb(255, 255, 255)";
    }
});

window.addEventListener("keydown",(e)=>
{
    if(keyBoard)
    {
        const key=e.key;

    if(key>='0' && key <='9')
    {
        btns[parseInt(key)].click();
    }
    else if(key==="+")
    {
        btnPlus.click();
    }
    else if(key==="-")
    {
        btnMinus.click();
    }
    else if(key==="*")
    {
        btnMul.click();
    }
    else if(key==="/")
    {
        btnDivision.click();
    }
    else if(key==="=")
    {
        btnEqual.click();
    }
    else if(key==="Enter")
    {
        alert("Press '=' Not Enter");
    }
    else if(key===".")
    {
        btnDot.click();
    }
    else if(key==="Backspace")
    {
        btnCut.click();
    }
    else if(key==="%")
    {
        btnPers.click();
    }
    else if(key==="Escape")
    {
        btnAC.click();
    }
    }
});