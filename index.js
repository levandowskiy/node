const contacts = require("./db/contacts.js");

const yargs = require("yargs");
const {hideBin} = require("yargs/helpers");
const arr = hideBin(process.argv)
const {argv} = yargs(arr);


async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        const allContacts = await contacts.listContacts()
        console.log(allContacts);
      break;

    case 'get':
        const getContacts = await contacts.getContactById(id)
        console.log(getContacts);
      break;

    case 'add':
        const addContacts = await contacts.addContact({name, email, phone})
        console.log(addContacts);
      break;

    case 'remove':
        const removeContacts = await contacts.removeContact(id)
        console.log(removeContacts);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);