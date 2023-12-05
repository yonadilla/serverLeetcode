const getUsername = () => {
    return `{ matchedUser(username: "yonadilla") {
      username
      submitStats: submitStatsGlobal {
        acSubmissionNum {
          difficulty
          count
          submissions
        }
      }
    }}`;
  };

module.exports = { getUsername }