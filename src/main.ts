
const buts =document.querySelectorAll('button')
const textSpace= document.querySelector('.textArea')
let text =textSpace?.textContent ?? ''
let startOfSecondNumber

interface Result {
    firstNum:number,
    secondNum:number,
    result:number,
    operant:('add'|'subst'|'mult'|'divi'|'')
}

const results:Result = {
    firstNum:0,
    secondNum:0,
    result:0,
    operant:'' 
}

buts.forEach((item)=>{
 item.onclick =(e)=>{
    let textValue=e.target as HTMLButtonElement
    const value = (<HTMLButtonElement>textValue).textContent as string
   
    if(textValue.value){
        textSpace?.append( value)
        if(results.operant===''){
            results.firstNum = parseFloat(textSpace?.textContent ?? '')
        }
        else{
           const nextNum:string = textSpace?.textContent?.replace(/\s/g, '').substring(startOfSecondNumber!+1) as string
            results.secondNum= parseFloat(nextNum)
        }
    }

    if(textValue.id =='add' ||textValue.id =='subst'||textValue.id =='mult'||textValue.id =='divi'){
        if(results.operant!==''){
            if(textSpace?.textContent==null||textSpace?.textContent==undefined){
            }else{
                if(results.firstNum!==0 && results.secondNum!==0){
                    finalResult()
                    results.operant=textValue.id
                    textSpace?.append( value)

                }else{
                    results.operant=textValue.id
                    let text1= textSpace.textContent
                    textSpace.textContent =text1.slice(0,(textSpace.textContent.length)-1)
                    textSpace?.append( value)
                }
            }

        }else{
            textSpace?.append( value)
            results.operant=textValue.id
            startOfSecondNumber = textSpace?.textContent?.replace(/\s/g, '').indexOf((value))
        }
        
    }
    if(textValue.id==='clear'){
        // console.log(textSpace?.textContent)
        clear()
        
    }
    if(textValue.id==='clearAll'){
        clearEveryThing()
    }
    if(textValue.id==='result'){
        finalResult()
    }
  
 }})

const calcuation =  ({firstNum ,operant,secondNum}:Result)=>{
    if( operant==='add' ){
        return firstNum + secondNum
    }else if( operant === 'subst' ){
        return firstNum - secondNum
    }else if ( operant === 'mult' ){
        return firstNum * secondNum
    }else if( operant === 'divi' ){
        if(firstNum / secondNum===Infinity){
            const infint=setTimeout(() => {
                textSpace!.textContent="infinity"
               
             }, 1000);
            clearTimeout(infint)
            console.log(infint)
            return 
        }else{

        return firstNum / secondNum
        }
    }else if((operant==''&& firstNum!==0)){
        return firstNum
    }
    else{
        return
    }
}

const name1='Hadaro Adams'

let num1 = name1.indexOf('a')


const clearEveryThing=()=>{
    textSpace!.textContent= ""
    results.firstNum=0
    results.secondNum=0
    results.operant=''
}

const finalResult=()=>{
    const finalAnswer= calcuation(results)
        textSpace!.textContent = finalAnswer?.toString() || ''
        results.firstNum =finalAnswer as number
        results.secondNum=0
        results.operant=''
}

const clear= () =>{
    text = textSpace!.textContent?.replace(/\s/g, '') as string
    console.log(text.slice(0,(text.length-1)))
    textSpace!.textContent = text?.slice(0,text.length-1)
    const operant=['+','-','x','/']
    operant.forEach((item)=>{
        if(item===text.slice(text.length-1)){
            results.operant=''
            console.log('yes')
        }
    })
    if(results.operant!==""){
        const nextNum:string = textSpace?.textContent?.replace(/\s/g, '').substring(startOfSecondNumber!+1) as string
        results.secondNum= parseInt(nextNum)
    }else{
        results.firstNum = parseInt(textSpace?.textContent ?? '')
    }
}