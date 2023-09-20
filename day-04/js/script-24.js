

function setMode(){
    const elBody = document.querySelector("body");

    // contains dizilerde dizi içinde bir elemanın olup olmadığını tespit etmek için kullanılır
    if(elBody.classList.contains("light")){
        elBody.classList.remove("light");
        elBody.classList.add("dark");
    }
    else{
        elBody.classList.add("light");
        elBody.classList.remove("dark");
    }
}