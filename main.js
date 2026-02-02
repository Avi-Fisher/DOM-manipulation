let inputNumber = document.getElementById("input-number")
let buttun = document.getElementById("applyBth")


buttun.addEventListener('mousedown', () => {
    if (inputNumber.value === "") {
        alert("Error, Enter number please")
    } else {
        let boxes = document.getElementById("boxes")
        boxes.remove()

        const newDiv = document.createElement('div')
        newDiv.id = "boxes"
        
        let body = document.getElementById("body")
        body.appendChild(newDiv)
        boxes = document.getElementById("boxes")

        for (let i = 0; i < inputNumber.value; i++) {


            let node = document.createElement('div')
            let textnode = document.createTextNode(i)
            node.appendChild(textnode)

            boxes.appendChild(node)
        }

    }
})


