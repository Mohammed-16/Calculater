function Ondisplay(num1) {
    Number(document.getElementById("display").value+=num1)
}
function clr(){
    document.getElementById("display").value = ""
}
function Calculation(){
    let operations = document.getElementById("display").value
    let Final_display = eval(operations)
    document.getElementById("display").value = Final_display
}