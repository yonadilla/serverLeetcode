const languageStats = () => {
  return `{matchedUser(username: "yonadilla"){
            languageProblemCount {
                languageName
                problemsSolved
      }
    }}`;
};

module.exports= {languageStats}