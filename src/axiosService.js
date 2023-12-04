// axiosService.js
const axios = require("axios");

const axiosService = async (url, query) => {
  try {
    const data = JSON.stringify({
      query,
      variables: {},
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    console.error("Error", error);
    throw new Error("Internal Server Error");
  }
};

module.exports = { axiosService };
