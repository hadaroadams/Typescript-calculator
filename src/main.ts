
const buts =document.querySelectorAll('button')
const textSpace= document.querySelector('.textArea')
let text =textSpace?.textContent ?? ''
console.log(buts)

const results = {
    firstNum:0,
    secondNum:0,
    result:0,
    operant:'' as ('add'|'subst'|'mult'|'divi'|'')
}

buts.forEach((item)=>{
 item.onclick =(e)=>{
    let textValue=e.target as HTMLButtonElement
    let startOfSecondNumber
    const value = (<HTMLButtonElement>textValue).textContent as string
    console.log(value)
    if(textValue.value){
        textSpace?.append( value)
        console.log(textSpace?.textContent ?? '')
        if(results.operant===''){
            results.firstNum = parseInt(textSpace?.textContent ?? '')
            console.log(results)
        }
        else{
            
            results.secondNum=parseInt(text)
        }
    }

    if(textValue.id =='add' ||textValue.id =='subst'||textValue.id =='mult'||textValue.id =='divi'){
        results.firstNum=parseInt(text)
        textSpace?.append( value)
        results.operant=textValue.id
        // console.log((textSpace?.textContent?))
        
    }
    if(textValue.id=='clear'){
        console.log(text?.slice(0,text.length-1))
        textSpace!.textContent = text?.slice(0,text.length-1)??''
    
    }
    if(textValue.id==='clearAll'){
        textSpace!.textContent= ""
        
    }
    if(textValue.id==='result'){
        startOfSecondNumber = textSpace?.textContent?.replace(/\s/g, '').indexOf('x')
        console.log(startOfSecondNumber)
        let secondNum=textSpace?.textContent
        results.secondNum=tes

    }
    // console.log((e.target as HTMLButtonElement).textContent)
    
 }})

const calcuation = (num1:number,operant:string,num2:number)=>{
    if( operant==='add' ){
        num1 + num2
    }else if( operant === 'substract' ){
        num1-num2
    }else if ( operant === 'times' ){
        num1*num2
    }else if( operant === 'divde' ){
        num1/num2
    }
}

const name1='Hadaro Adams'

let num1 = name1.indexOf('a')

console.log(num1)
