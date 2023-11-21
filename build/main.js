"use strict";
var _a;
const buts = document.querySelectorAll('button');
const textSpace = document.querySelector('.textArea');
let text = (_a = textSpace === null || textSpace === void 0 ? void 0 : textSpace.textContent) !== null && _a !== void 0 ? _a : '';
console.log(buts);
const results = {
    firstNum: 0,
    secondNum: 0,
    result: 0,
    operant: ''
};
buts.forEach((item) => {
    item.onclick = (e) => {
        var _a, _b, _c, _d;
        let textValue = e.target;
        let startOfSecondNumber;
        const value = textValue.textContent;
        console.log(value);
        if (textValue.value) {
            textSpace === null || textSpace === void 0 ? void 0 : textSpace.append(value);
            console.log((_a = textSpace === null || textSpace === void 0 ? void 0 : textSpace.textContent) !== null && _a !== void 0 ? _a : '');
            if (results.operant === '') {
                results.firstNum = parseInt((_b = textSpace === null || textSpace === void 0 ? void 0 : textSpace.textContent) !== null && _b !== void 0 ? _b : '');
                console.log(results);
            }
            else {
                results.secondNum = parseInt(text);
            }
        }
        if (textValue.id == 'add' || textValue.id == 'subst' || textValue.id == 'mult' || textValue.id == 'divi') {
            results.firstNum = parseInt(text);
            textSpace === null || textSpace === void 0 ? void 0 : textSpace.append(value);
            results.operant = textValue.id;
            // console.log((textSpace?.textContent?))
        }
        if (textValue.id == 'clear') {
            console.log(text === null || text === void 0 ? void 0 : text.slice(0, text.length - 1));
            textSpace.textContent = (_c = text === null || text === void 0 ? void 0 : text.slice(0, text.length - 1)) !== null && _c !== void 0 ? _c : '';
        }
        if (textValue.id === 'clearAll') {
            textSpace.textContent = "";
        }
        if (textValue.id === 'result') {
            startOfSecondNumber = (_d = textSpace === null || textSpace === void 0 ? void 0 : textSpace.textContent) === null || _d === void 0 ? void 0 : _d.replace(/\s/g, '').indexOf('x');
            console.log(startOfSecondNumber);
            results.secondNum;
        }
        // console.log((e.target as HTMLButtonElement).textContent)
    };
});
const calcuation = (num1, operant, num2) => {
    if (operant === 'add') {
        num1 + num2;
    }
    else if (operant === 'substract') {
        num1 - num2;
    }
    else if (operant === 'times') {
        num1 * num2;
    }
    else if (operant === 'divde') {
        num1 / num2;
    }
};
const name1 = 'Hadaro Adams';
let num1 = name1.indexOf('a');
console.log(num1);
