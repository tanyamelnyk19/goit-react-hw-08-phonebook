import { createSelector } from "@reduxjs/toolkit";

export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.contacts.filter

export const getIisLoadingContacts = state => state.contacts.loading;

export const getFilteredName = createSelector(
    [getContacts,getFilter],
    (contacts, filter) => {
        const normalizedFilter = filter.toLowerCase();
        const filteredName = contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter));
        return filteredName;
    }
);
