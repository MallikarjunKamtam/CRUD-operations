import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios({
      method: "get",
      url: "http://localhost:3000/employees",
    });
    return response.data;
  } catch (err) {
    console.log(err.response.data);
  }
};

export const postData = async (payload) => {
  try {
    const response = await axios({
      method: "post",
      url: "http://localhost:3000/employees",
      data: {
        ...payload,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err.response.data);
  }
};
