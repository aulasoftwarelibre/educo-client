import axios from 'axios';

export const fetchSessionById = () =>
    axios.get(`${process.env.REACT_APP_API_URL}${process.env.REACT_APP_API_SESSION_ID}`)
;
