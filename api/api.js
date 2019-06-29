import fetch from "isomorphic-unfetch";

const apiCall = urlToFetch =>
  fetch(urlToFetch).then(response => response.json());

export default apiCall;
