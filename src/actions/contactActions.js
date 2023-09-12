import axios from "axios";

//Get Request : Importing the Contacts from API
export const getContacts = () => async dispatch => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  dispatch({
    type: "GET_CONTACTS",
    payload: response.data
  });
};
// Get Request : the specific contact detail's on the basis of contact ID
export const getContact = id => async dispatch => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: "GET_CONTACT",
    payload: response.data
  });
};


//DELETE Request : Deleting the contact with the ID
export const deleteContact = id => async dispatch => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  dispatch({
    type: "DELETE_CONTACT",
    payload: id
  });
};


// Post : Used to add the contact details
export const addContact = contact => async dispatch => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/users/",
    contact
  );
  dispatch({
    type: "ADD_CONTACT",
    payload: response.data
  });
};


//  PUT Reques : For updating the user contact detail
export const updateContact = contact => async dispatch => {
  const response = await axios.put(
    `https://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({
    type: "UPDATE_CONTACT",
    payload: response.data
  });
};
