import axios from 'axios';

export const fetchAnswersByQuestionId = (id: string) =>
    axios.get(`${process.env.REACT_APP_API_URL}${id}/answers`)
;
