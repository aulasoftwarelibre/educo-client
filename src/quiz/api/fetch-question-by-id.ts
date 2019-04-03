import axios from 'axios';

export const fetchQuestionById = (id: string) =>
    axios.get(`${process.env.REACT_APP_API_URL}${id}`)
;
