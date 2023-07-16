function display1(){
    document.getElementById("program_block_1").style.display = 'block'
    document.getElementById("program_block_2").style.display = 'none'
    document.getElementById("program_block_3").style.display = 'none'
    console.log("First Function")
}
function display2(){
    document.getElementById("program_block_1").style.display = 'none'
    document.getElementById("program_block_2").style.display = 'block'
    document.getElementById("program_block_3").style.display = 'none'
}
function display3(){
    document.getElementById("program_block_1").style.display = 'none'
    document.getElementById("program_block_2").style.display = 'none'
    document.getElementById("program_block_3").style.display = 'block'
}

window.onload = display1()