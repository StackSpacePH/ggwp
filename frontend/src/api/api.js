import axios from 'axios';

const APIENDPOINT = "https://calm-spire-77666.herokuapp.com/api";

export const fetchUser = async (userslug) => await axios.get(`${APIENDPOINT}/users/${userslug}`);