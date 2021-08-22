var formDate, formTime, formTitle, formContent;
var notesKeyName = "allNotes"
var notesDiv = document.getElementById("notesDiv");
var noteList = [];

const note1 = "url(../images/notesFrames/1.png)";
const note2 = "url(../images/notesFrames/2.png)";
const note3 = "url(../images/notesFrames/3.png)";

const noteBordersArr = [note1, note2, note3];



class Note{
    constructor(timeStamp ,date, time, title, content){
        this.timeStamp = timeStamp,
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
    // console.log(formDate);
}

function validateFormData(){
    formTitle = formTitle.toUpperCase();
    return true;
}

function addToLocal(){
    var timeStamp = new Date().getTime()
    let note = new Note(timeStamp, formDate, formTime, formTitle, formContent);
    if(localStorage.getItem(notesKeyName)){
        noteList = JSON.parse(localStorage.getItem(notesKeyName));
        noteList.push(note);
        localStorage.setItem(notesKeyName, JSON.stringify(noteList));
    }else{
        noteList.push(note);
        localStorage.setItem(notesKeyName, JSON.stringify(noteList));
    }
}

function addNote(){
    readFormData();
    if(validateFormData()){
        addToLocal();        
    }
}

function showNotes(){
    if(localStorage.getItem(notesKeyName)){
        noteList = JSON.parse(localStorage.getItem(notesKeyName));
        for(let i = 0; i < noteList.length; i++){
            // creating elements

            let noteGrid = document.createElement("div");
            let newNote = document.createElement("div");
            let deleteSpan = document.createElement("i");
            let noteTitle = document.createElement("h2");
            let noteContentSection = document.createElement("div");
            let noteContent = document.createElement("p");
            let separateLine = document.createElement("div");
            let noteDate = document.createElement("p");
            let noteTime = document.createElement("p");

            // giving Css ClassName
            
            newNote.className = "newNote col";
            newNote.style.borderImage = `${noteBordersArr[Math.floor(Math.random()*3)]} 100 stretch`;
            deleteSpan.className = "far fa-times note-del";
            noteTitle.className = "note-title";
            noteContentSection.className = "content-section";
            noteContent.className = "note-content";
            separateLine.className = "separate-line d-flex";
            noteDate.className = "note-date";
            noteTime.className = "note-time";

            // injecting data from localStorage
            noteDate.innerText = noteList[i].date;
            noteTime.innerText = noteList[i].time;
            noteTitle.innerText = noteList[i].title;
            noteContent.innerText = noteList[i].content;
            deleteSpan.id = noteList[i].timeStamp;
            deleteSpan.setAttribute("onclick", "deleteNote(this)");

            // appending elements to notesDiv
            noteContentSection.append(noteContent);
            separateLine.append(noteTime, noteDate);
            newNote.append(deleteSpan, noteTitle, noteContentSection,separateLine);
            notesDiv.append(newNote);
        }
    }
}

function deleteNote(delBtn){
    noteList = JSON.parse(localStorage.getItem(notesKeyName))
    console.log(noteList)
    for (let i = 0; i < noteList.length; i++){
        if (noteList[i].timeStamp == delBtn.id){
            noteList.splice(i,1);
            localStorage.setItem(notesKeyName, JSON.stringify(noteList));
            location.reload();
        }
    }
}

function deleteAllNotes(){
    localStorage.clear(notesKeyName);
    location.reload();
}

showNotes();