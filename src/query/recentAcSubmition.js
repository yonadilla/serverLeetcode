const recentSubmition = () => {
  return `{ recentAcSubmissionList(username: "yonadilla", limit: 20) {
    id
    title
    titleSlug
    timestamp
  }
}
    `;
};

module.exports = {recentSubmition}
