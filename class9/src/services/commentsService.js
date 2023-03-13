import { API_URL } from "../utils/constants";

export const getComments = () => {
  return fetch(`${API_URL}comments`)
    .then((res) => res.json())
    .then((json) => json)
    .catch((err) => alert(err));
};
