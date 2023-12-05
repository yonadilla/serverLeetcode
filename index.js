const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const app = express();
const { axiosService } = require("./src/axiosService");
const { getUsername } = require("./src/query/getUsername");
const { languageStats } = require("./src/query/languageStats");
const { skillStats } = require("./src/query/SkillStats");
const { recentSubmition } = require("./src/query/recentAcSubmition");
const { problemsSolved } = require("./src/query/countProblemSolved");
const port = 3000;

app.use(
  cors({
    origins: "http://localhost:5173/",
  })
)
app.use(bodyParser.json());

app.get("/profile/yonadilla", async (req, res) => {
  const query = getUsername()

  try {
    const responseData = await axiosService("https://leetcode.com/graphql", query);
    res.send(responseData)
  } catch (error) {
    res.status(500).json({ error : error.message })
  }
})

app.get("/languageStats/yonadilla", async (req , res) => {
  const queryLang = languageStats()

  try {
    const responseData = await axiosService("https://leetcode.com/graphql", queryLang)
    res.send(responseData)
  }catch (error) {
    res.status(500).json({error : error.message})
  }
})

app.get("/skillStats/yonadilla", async (req , res) => {
  const querySkillStats = skillStats()

  try {
    const responseData = await axiosService("https://leetcode.com/graphql", querySkillStats)
    res.send(responseData)
  }catch (error) {
    res.status(500).json({error : error.message})
  }
})

app.get("/submition/yonadilla", async (req , res) => {
  const querySubmition = recentSubmition()

  try {
    const responseData = await axiosService("https://leetcode.com/graphql", querySubmition)
    res.send(responseData)
  }catch (error) {
    res.status(500).json({error : error.message})
  }
})

app.get("/problemSolved/yonadilla", async (req , res) => {
  const queryProblemSolved = problemsSolved()

  try {
    const responseData = await axiosService("https://leetcode.com/graphql", queryProblemSolved)
    res.send(responseData)
  }catch (error) {
    res.status(500).json({error : error.message})
  }
})


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
