var formDate, formTime, formTitle, formContent;
var notesKeyName = "allNotes"
var noteList = [];

showNotes();

class Note{
    constructor(date, time, title, content){
        this.date = date,
        this.time = time,
        this.title = title,
        this.content = content;
    }
}

function readFormData(){
    formDate = document.getElementById("dateId").value;
    formTime = document.getElementById("timeId").value;
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
    let note = new Note(formDate, formTime, formTitle, formContent);
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