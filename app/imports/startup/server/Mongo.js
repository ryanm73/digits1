import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contact/Contacts';

/* eslint-disable no-console */
function addContact(data) {
  console.log(`  Adding: ${data.lastName} (${data.owner})`);
  Contacts.insert(data);
}

if (Contacts.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default data.');
    Meteor.settings.defaultContacts.map(data => addContact(data));
  }
}