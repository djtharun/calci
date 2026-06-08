const digits = document.querySelector('#buttons')
const screen = document.querySelector('#screen')
screen.textContent = 0
screen.style.justifyContent = 'flex-end'
screen.style.alignItems = 'flex-end'
let n1, op, n2
n1 = n2 = ''
let ops = ['+','-','*','/']
let operate = (n1,n2,op) => {
    switch(op) {
        case '+':
            return n1+n2
        case '-':
            return n1-n2
        case '*':
            return n1*n2
        case '/':
            return n1/n2
        default:
            return 'Invalid'
    }
}
buttons.addEventListener('click',(event) => {
    if(event.target.matches('button')) {
        if(event.target.textContent==='CE') {
            // clear button
            screen.textContent = ''
            n1 = n2 = ''
            op = undefined
        }
        if(event.target.textContent==='<-') {
            if(typeof n1 === 'string' && op===undefined) {
                if(n1.length>1) {
                    n1 = n1.slice(0,-1)
                }
                else {
                    n1 = ''
                }
            }
            else if(op!==undefined && n2 === '') {
                op = undefined
            }
            else {
                if(n2.length>1) {
                    n2 = n2.slice(0,-1)
                }
                else {
                    n2 = ''
                }
            }
            screen.textContent = screen.textContent.slice(0,-1)
        }
        else if(ops.includes(event.target.textContent) && op!==undefined && typeof n1 === 'number' && n2!=='') {
            // when second operator is entered
            n2 = Number(n2)
            n1 = operate(n1,n2,op)
            op = event.target.textContent
            screen.textContent = n1+op
            n2 = ''
        }
        else if(op===undefined && !Number.isNaN(Number(event.target.textContent))) {
            // when first operand is entered
            n1 += event.target.textContent
            screen.textContent = n1
            console.log('ok1')
        }
        else if(ops.includes(event.target.textContent)) {
            // when first operator is entered
            if(n1==='') {
                screen.textContent = 'Enter a number first'
            }
            else if(op===undefined){
                op = event.target.textContent
                n1 = Number(n1)
                screen.textContent += op
            }
            console.log('ok2')
        }
        else if(typeof n1 === 'number' && event.target.textContent!=='=') {
            // when second operand is entered
            n2 += event.target.textContent
            screen.textContent += event.target.textContent
            console.log('ok3')
        }
        else if(event.target.textContent==='=') {
            // when = is entered
            console.log(n1,n2,op)
            n2 = Number(n2)
            screen.textContent = n1 = operate(n1,n2,op)
            n2 = ''
            op = undefined
        }
    }
})
