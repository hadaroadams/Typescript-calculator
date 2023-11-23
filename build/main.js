"use strict";
var _a;
const buts = document.querySelectorAll('button');
const textSpace = document.querySelector('.textArea');
let text = (_a = textSpace === null || textSpace === void 0 ? void 0 : textSpace.textContent) !== null && _a !== void 0 ? _a : '';
let startOfSecondNumber;
const results = {
    firstNum: 0,
    secondNum: 0,
    result: 0,
    operant: ''
};
buts.forEach((item) => {
    item.onclick = (e) => {
        var _a, _b, _c;
        let textValue = e.target;
        const value = textValue.textContent;
        if (textValue.value) {
            textSpace === null || textSpace === void 0 ? void 0 : textSpace.append(value);
            if (results.operant === '') {
                results.firstNum = parseFloat((_a = textSpace === null || textSpace === void 0 ? void 0 : textSpace.textContent) !== null && _a !== void 0 ? _a : '');
            }
            else {
                const nextNum = (_b = textSpace === null || textSpace === void 0 ? void 0 : textSpace.textContent) === null || _b === void 0 ? void 0 : _b.replace(/\s/g, '').substring(startOfSecondNumber + 1);
                results.secondNum = parseFloat(nextNum);
            }
        }
        if (textValue.id == 'add' || textValue.id == 'subst' || textValue.id == 'mult' || textValue.id == 'divi') {
            if (results.operant !== '') {
                if ((textSpace === null || textSpace === void 0 ? void 0 : textSpace.textContent) == null || (textSpace === null || textSpace === void 0 ? void 0 : textSpace.textContent) == undefined) {
                }
                else {
                    if (results.firstNum !== 0 && results.secondNum !== 0) {
                        finalResult();
                        results.operant = textValue.id;
                        textSpace === null || textSpace === void 0 ? void 0 : textSpace.append(value);
                    }
                    else {
                        results.operant = textValue.id;
                        let text1 = textSpace.textContent;
                        textSpace.textContent = text1.slice(0, (textSpace.textContent.length) - 1);
                        textSpace === null || textSpace === void 0 ? void 0 : textSpace.append(value);
                    }
                }
            }
            else {
                textSpace === null || textSpace === void 0 ? void 0 : textSpace.append(value);
                results.operant = textValue.id;
                startOfSecondNumber = (_c = textSpace === null || textSpace === void 0 ? void 0 : textSpace.textContent) === null || _c === void 0 ? void 0 : _c.replace(/\s/g, '').indexOf((value));
            }
        }
        if (textValue.id === 'clear') {
            // console.log(textSpace?.textContent)
            clear();
        }
        if (textValue.id === 'clearAll') {
            clearEveryThing();
        }
        if (textValue.id === 'result') {
            finalResult();
        }
    };
});
const calcuation = ({ firstNum, operant, secondNum }) => {
    if (operant === 'add') {
        return firstNum + secondNum;
    }
    else if (operant === 'subst') {
        return firstNum - secondNum;
    }
    else if (operant === 'mult') {
        return firstNum * secondNum;
    }
    else if (operant === 'divi') {
        if (firstNum / secondNum === Infinity) {
            const infint = setTimeout(() => {
                textSpace.textContent = "infinity";
            }, 1000);
            clearTimeout(infint);
            console.log(infint);
            return;
        }
        else {
            return firstNum / secondNum;
        }
    }
    else if ((operant == '' && firstNum !== 0)) {
        return firstNum;
    }
    else {
        return;
    }
};
const name1 = 'Hadaro Adams';
let num1 = name1.indexOf('a');
const clearEveryThing = () => {
    textSpace.textContent = "";
    results.firstNum = 0;
    results.secondNum = 0;
    results.operant = '';
};
const finalResult = () => {
    const finalAnswer = calcuation(results);
    textSpace.textContent = (finalAnswer === null || finalAnswer === void 0 ? void 0 : finalAnswer.toString()) || '';
    results.firstNum = finalAnswer;
    results.secondNum = 0;
    results.operant = '';
};
const clear = () => {
    var _a, _b, _c;
    text = (_a = textSpace.textContent) === null || _a === void 0 ? void 0 : _a.replace(/\s/g, '');
    console.log(text.slice(0, (text.length - 1)));
    textSpace.textContent = text === null || text === void 0 ? void 0 : text.slice(0, text.length - 1);
    const operant = ['+', '-', 'x', '/'];
    operant.forEach((item) => {
        if (item === text.slice(text.length - 1)) {
            results.operant = '';
            console.log('yes');
        }
    });
    if (results.operant !== "") {
        const nextNum = (_b = textSpace === null || textSpace === void 0 ? void 0 : textSpace.textContent) === null || _b === void 0 ? void 0 : _b.replace(/\s/g, '').substring(startOfSecondNumber + 1);
        results.secondNum = parseInt(nextNum);
    }
    else {
        results.firstNum = parseInt((_c = textSpace === null || textSpace === void 0 ? void 0 : textSpace.textContent) !== null && _c !== void 0 ? _c : '');
    }
};
