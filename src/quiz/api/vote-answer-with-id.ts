import axios from 'axios';

export const voteAnswerWithId = (id: string) =>
    axios.put(`${process.env.REACT_APP_API_URL}${id}/vote`)
;
