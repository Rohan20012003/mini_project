let counterValue=document.querySelector('#counter');
let decrement=()=>{
    let value=parseInt(counterValue.innerText);
    value=value-1;
    counterValue.innerText=value;
}

let increment=()=>{
    let value=parseInt(counterValue.innerText);
    value=value+1;
    counterValue.innerText=value;
}

