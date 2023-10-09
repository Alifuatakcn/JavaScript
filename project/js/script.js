
// EVENT FUNCTIONS

document.getElementById("btnDarkMode").addEventListener("click", (e)=>{
    document.querySelector("body").classList.toggle("dark-mode");
    
    const btnDarkMode = document.querySelector("#btnDarkMode i");
    btnDarkMode.classList.toggle("fa-moon");
    btnDarkMode.classList.toggle("fa-sun");
})


document.getElementById("btnShowAddNoteForm").addEventListener("click", ()=>{
    toggleAddNoteForm();
  
})


document.getElementById("btnHideForm").addEventListener("click", ()=>{
    toggleAddNoteForm();
})

document.getElementById("btnAddNote").addEventListener("click", ()=>{

    const titleEl = document.getElementById("title");
    const noteEl = document.getElementById("note");
    const colorEl = document.querySelector('input[name="colors"]:checked');


    try {
        const title = titleEl.value;
        const note = noteEl.value;
        const color = colorEl.id;

        // Form validation
        if(!title) throw new Error("Plase enter a title");
        if(!note) throw new Error("Plase enter a note");
        color ??= "light"; // color = color ?? "light"

        // API üzerinden yeni note ekle
        fetch("https://651da7e644e393af2d5a2461.mockapi.io/api/v1/notes")
        .then( (resp)=> resp.json())
        .then( (data)=>{
            // Sayfaya, eklenen note ile alakalı card ekle
            // Reset
        })
        .catch( (err)=>{
            alert(err)
        })

        
    } catch (err) {
        alert(err.message);
    }

   


    



    
    

})



// OTHER FUNCTIONS

const toggleAddNoteForm = () => { 
    document.querySelector(".add-note-form").classList.toggle("d-none");
    const btnShowAddNoteForm = document.querySelector("#btnShowAddNoteForm i");
    btnShowAddNoteForm.classList.toggle("fa-plus");
    btnShowAddNoteForm.classList.toggle("fa-times");
}