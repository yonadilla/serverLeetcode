const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const { axiosService } = require("./src/axiosService");
const { getUsername } = require("./src/query/getUsername")
const port = 3000;

app.use(
  cors({
    origins: "http://localhost:5173/",
  })
)
app.use(bodyParser.json());

app.get("/profile/:username", async (req, res) => {
  const param = req.params.username;
  const query = getUsername(param)

  try {
    const responseData = await axiosService("https://leetcode.com/graphql", query);
    res.send(responseData)
  } catch (error) {
    res.status(500).json({ error : error.message })
  }
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
