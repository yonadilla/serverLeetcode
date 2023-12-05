const skillStats = () => {
  return `{ matchedUser(username: "yonadilla") {
    tagProblemCounts {
      advanced {
        tagName
        tagSlug
        problemsSolved
      }
      intermediate {
        tagName
        tagSlug
        problemsSolved
      }
      fundamental {
        tagName
        tagSlug
        problemsSolved
      }
    }
  }
}`;
};

module.exports = {skillStats}
