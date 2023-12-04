const languageStats = (username) => {
  return `{matchedUser(username: "${username}"){
            languageProblemCount {
                languageName
                problemsSolved
      }
    }}`;
};

module.exports= {languageStats}