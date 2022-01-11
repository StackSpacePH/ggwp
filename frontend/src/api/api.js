import axios from 'axios';

const url = "http://localhost:5000/api/users";

export const fetchUser = async (userslug) => await axios.get(`${url}/${userslug}`);