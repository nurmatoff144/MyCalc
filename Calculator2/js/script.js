let sum = '0'


let output = document.createElement('input')
output.value = sum
output.disabled = true
output.classList.add('output')
document.body.append(output)

let arr = ['AC', '.', 'C',  '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '0', '-', '*', '/', '=', ]

const getNum = (event) => {
    let num = event.target.value

    if (num == 'C') {
        sum = sum.substring(0, sum.length - 1)
    } else if (num == 'AC') {
        sum = '0'
    } else if (num == '=') {
        sum = eval(sum)
    } else {
        if (sum == '0') {
            sum = ''
        }
        sum = sum + num
    }
    
    output.value = sum
}


let btnWrapper = document.createElement('div')
btnWrapper.classList.add('btnWrapper')
document.body.append(btnWrapper)

arr.forEach((el, index) => {
    let btn = document.createElement('input')
    btn.type = 'button'
    btn.classList.add('btn')
    btn.value = el
    btn.id="btn"+index

    btn.addEventListener('click', getNum)

    btnWrapper.append(btn)
})

const body = document.body
    const btn17 = document.querySelector('#btn17').onclick = function() {

    let embed = document.createElement('embed')
    embed.src = './image/fvfyfyfyv.mp3'
    embed.setAttribute.loop = 'true'
    body.append(embed)

    let btn17photo = document.createElement('img')
    btn17photo.classList.add('img')
    btn17photo.src = './image/maxresdefault.jpg'
    body.append(btn17photo)
}


