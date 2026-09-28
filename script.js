const noteInput = document.getElementById("noteInput");
const saveNote = document.getElementById("saveNote");
const notesContainer = document.getElementById("notes");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function displayNotes() {
    notesContainer.innerHTML = "";

    notes.forEach(function (note) {
        const noteElement = document.createElement("div");

        noteElement.classList.add("note");
        noteElement.textContent = note;

        notesContainer.appendChild(noteElement);
    });
}

saveNote.addEventListener("click", function () {
    const note = noteInput.value.trim();

    if (note === "") {
        return;
    }

    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    noteInput.value = "";

    displayNotes();
});

displayNotes();
