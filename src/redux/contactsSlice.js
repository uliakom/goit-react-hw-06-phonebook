import { createSlice } from '@reduxjs/toolkit';

const defaultContacts =[
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];


 export const phoneBookSlice = createSlice({
    name: 'phonebook',
    initialState: {
        contacts: defaultContacts,
        filter: ''
   },
    
    reducers: {
        add:(state, action)=> {
           state.contacts.push(action.payload);
     }   
     },
     remove:(state, action)=> {
       state.contacts = state.contacts.filter(contact => contact.id !== action.payload)
    },
     filterContact:(state, action)=> {
         state.filter = action.payload;
    }
 });

export const { add, remove, filterContact } = phoneBookSlice.actions;

