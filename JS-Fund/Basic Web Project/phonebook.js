/* TODO: 
	create phonebook array
	add methods for adding in the phonebook and getting it
	export the methods
*/

const phonebook = []

const addContact = contact => {
	phonebook.push(contact)
	console.log(phonebook)
}

const getContacts = () => {
	return phonebook.slice()
}

module.exports = {
	addContact,
	getContacts,
}