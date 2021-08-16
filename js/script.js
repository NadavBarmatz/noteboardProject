var formDate, formTitle, formContent;
var notesKeyName = "allNotes"
var noteList = [];

showNotes();

class Note{
    constructor(date, title, content){
        this.date = date,
        this.title = title,
        this.content = content;
    }
}

function readFormData(){
    formDate = document.getElementById("dateId").value;
    formTitle = document.getElementById("titleId").value;
    formContent = document.getElementById("contentId").value;
}

function validateFormData(){
    return true;
}

function addNote(){
    readFormData();
    if(validateFormData()){
        addToLocal();        
    }
}

function addToLocal(){
    let note = new Note(formDate, formTitle, formContent);
    if(localStorage.getItem(notesKeyName)){
        noteList = JSON.parse(localStorage.getItem(notesKeyName));
        noteList.push(note);
        localStorage.setItem(notesKeyName, JSON.stringify(noteList));
    }else{
        noteList.push(note);
        localStorage.setItem(notesKeyName, JSON.stringify(noteList));
    }
}

function showNotes(){
    if(localStorage.getItem(notesKeyName)){
        noteList = JSON.parse(localStorage.getItem(notesKeyName));
        for(let i = 0; i < noteList.length; i++){
            
        }
    }
}