import axios from "axios";

export const fetch = (url = "http://localhost:4000/") => {
  return axios.get(url).then(({ data }) => {
    return data;
  
  });
};
export const fetchPost = (title,url = "http://localhost:4000/users") => {
  return axios.post(url,{
    title: title,
  }).then(({ data }) => {
    return data;
  });
};

