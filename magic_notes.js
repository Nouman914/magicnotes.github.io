// it the user adds the notes add it to the local stroage
shownotes();
let addbtn = document.getElementById("addbtn")
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes")
    if (notes == null) {
        notesobj = []

    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    console.log(notesobj);

    shownotes()
})

//Function to show the elements from the local storage
function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">Note ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id="${index}" class="btn btn-primary" onclick="deleteNote(this.id)">Delete Note</button>
                </div>
            </div>-
`

    });
    let notesElm = document.getElementById("notes");
    if (notesobj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = '=>Nothing to show! Use "Add a Note" section to add the notes ';
    }
}

//Function to delete Notes
function deleteNote(index) {

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];

    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();

}
                                    //function to properly search the text one by one
let search = document.getElementById('searchtxt');
search.addEventListener("input", function () {
    let inputval = search.value.toLowerCase();
   
    let notecards = document.getElementsByClassName("noteCard");
    Array.from(notecards).forEach(function (element) {
        let cardtxt = element.getElementsByTagName("p")[0].innerText;
        if (cardtxt.includes(inputval)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })

})
                                        //function to delete all Buttons
let deletebtn=document.getElementById("deletebtn");
deletebtn.addEventListener("click", function (e) 
{
    localStorage.clear();
    shownotes();
}
)