document.getElementById("btnDarkMode").addEventListener("click", (e)=>{
    document.querySelector("body").classList.toggle("dark-mode");
    const btnDarkMode = document.querySelector("#btnDarkMode i");
   // btnDarkMode.classList.toggle("fa-moon");
    //btnDarkMode.classList.toggle("fa-sun");
    if(btnDarkMode.className=="fa fa-moon"){
        btnDarkMode.setAttribute('class', 'fas fa-sun');
    }else{
        btnDarkMode.setAttribute('class', 'fa fa-moon');
    }
})


document.getElementById("btnShowAddNoteForm").addEventListener("click", ()=>{
    document.querySelector(".add-note-form").classList.toggle("d-none");
    const btnShowAddNoteForm = document.querySelector("#btnShowAddNoteForm i");
    btnShowAddNoteForm.classList.toggle("fa-plus");
    btnShowAddNoteForm.classList.toggle("fa-times");
})