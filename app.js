let myWindow;
document.getElementById("button").addEventListener("click", () =>{
    myWindow = window.open("https://www.google.be/");
    myWindow.resizeTo(250, 250);
    myWindow.moveTo(0, 0)
})

document.getElementById("exit").addEventListener("click", () =>{
    myWindow.close()
})