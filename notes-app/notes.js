const { default: chalk } = require("chalk");
const fs = require("fs");

const getNotes = () => {
  return "your notes...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  debugger;

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log("New note added");
  } else {
    console.log("Note title already taken");
  }
};

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

const removeNote = (title) => {
  // console.log(title);
  const notes = loadNotes();

  const noteToKeep = notes.filter((note) => note.title !== title);

  if (noteToKeep.length === 0) {
    saveNotes(noteToKeep);

    console.log(chalk.green.inverse("Note removed"));
  } else {
    console.log(chalk.red.inverse("No note found"));
  }
};

const listNotes = () => {
  console.log(chalk.green.inverse("Your Notes"));
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(note.title);
  });
};

const readNote = (title) => {
  const notes = loadNotes();
  const noteFound = notes.find((note) => note.title === title);
  if (noteFound) {
    console.log(chalk.green.inverse(noteFound.title));
    console.log(noteFound.body);
  } else {
    console.log(chalk.red("no note found"));
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
