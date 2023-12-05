const problemsSolved = () => {
    return `
    {
        allQuestionsCount {
          difficulty
          count
        }
        matchedUser(username: "yonadilla") {
          problemsSolvedBeatsStats {
            difficulty
            percentage
          }
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
        }
      }
          `
}

module.exports ={problemsSolved}