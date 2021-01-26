let btn0 = document.getElementById('btn0')
let btn1 = document.getElementById('btn1')
let btnClr = document.getElementById('btnClr')
let btnEql = document.getElementById('btnEql')
let btnSum = document.getElementById('btnSum')
let btnSub = document.getElementById('btnSub')
let btnMul = document.getElementById('btnMul')
let btnDiv = document.getElementById('btnDiv')


btn0.onclick = action;
btn1.onclick = action;
btnClr.onclick = clear;
btnEql.onclick = equals;
btnSum.onclick = action;
btnSub.onclick = action;
btnMul.onclick = action;
btnDiv.onclick = action;


function action(e) {
    let btn = e.target
    document.getElementById('res').innerHTML += btn.innerHTML;
}

function clear() {
    document.getElementById('res').innerHTML = '';

}

function equals() {

    let enteredExpression = document.getElementById('res').innerHTML
    let numsRegex = /(\d+)/g

    let replaceBinaryWithDecimal = enteredExpression.replace(numsRegex, decimalNumbers = function (match) {
        return parseInt(match, 2)
    })

    let answer = eval(replaceBinaryWithDecimal)

    return document.getElementById('res').innerHTML = answer

}

