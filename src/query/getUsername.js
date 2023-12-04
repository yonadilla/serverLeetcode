const getUsername = (username) => {
    return `{ matchedUser(username: "${username}") {
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