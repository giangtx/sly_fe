const BASE_URL = "http://localhost:3013";

export const getApi = async (url) => {
  const options = {
    method: "get",
    headers: {
      Accept: "Application/json",
      "Content-type": "Application/json",
    },
    credentials: 'include',
  };
  return fetch(BASE_URL + url, options).then((res) => res.json());
};

export const postApi = async (url, data) => {
  const options = {
    method: "post",
    headers: {
      Accept: "Application/json",
      "Content-type": "Application/json",
    },
    credentials: 'include',
    body: JSON.stringify(data),
  };
  return fetch(BASE_URL + url, options).then((res) => res.json());
};

export const putApi = async (url, data) => {
  const options = {
    method: "put",
    headers: {
      Accept: "Application/json",
      "Content-type": "Application/json",
    },
    credentials: "include",
    body: JSON.stringify(data),
  };
  return fetch(BASE_URL + url, options).then((res) => res.json());
};
export const postForm = async(url, data) => {
  const options = {
    method: "post",
    headers: {
    },
    credentials: "include",
    body: data,
  };
  return fetch(BASE_URL + url, options).then((res) => res.json());
}
