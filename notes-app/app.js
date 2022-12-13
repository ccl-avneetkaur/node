//const fs = require("fs");
//fs.appendFileSync("notes.txt", "My Name is Avneet.");

// const add = require("./utils");
// const sum = add(5, 2);
// console.log(sum);

// const validator = require("validator");

// const msg = getNotes();

// console.log(msg);
// // console.log(validator.isEmail("a@k.com"));

// console.log(chalk.green.inverse.bold("Success!"));
// console.log(process.argv[2]);

// const command = process.argv[2];
// if (command === "add") {
//   console.log("adding note!");
// }
// if (command === "remove") {
//   console.log("Removing note!");
// }

// console.log(process.argv);

const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

// Customize yargs version
yargs.version("1.1.0");

// add remove read list

yargs.command({
  command: "add",
  describe: "Add a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Listing the note",
  handler(argv) {
    notes.listNotes();
  },
});

yargs.command({
  command: "read",
  describe: "Reading the note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// console.log(yargs.argv);
yargs.parse();
