const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const port = 3000;

app.use(
  cors({
    origins: "http://localhost:5173/",
  })
)
app.use(bodyParser.json());

app.post(`/leetcode/:username`, async (req, res) => {

  const username = req.params.username;
  try {
    const data = JSON.stringify({
      query: `{ matchedUser(username: "${username}") {
        username
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
      }`,
      variables: {},
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://leetcode.com/graphql",
      headers: {
        "Content-Type": "application/json",
        Cookie:
          "csrftoken=Z4HAxOFK8q5qU9a5A5F3Xbd6pMSl5NiUTIul6ybSP9nuJFAf4FNozulahmvviVHJ",
      },
      data: data,
    };

    const response = await axios.request(config);
    res.send(response.data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
