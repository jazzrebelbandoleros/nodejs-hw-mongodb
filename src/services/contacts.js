import { Contacts } from '../db/models/сontact.js';

export const getAllContacts = async () => {
  const contacts = await Contacts.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await Contacts.findById(contactId);
  return contact;
};
