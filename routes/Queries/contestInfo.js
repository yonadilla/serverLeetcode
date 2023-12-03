const url = `https://leetcode.com/graphql?query=query
{    

    matchedUser(username: "yonadilla"){
      submitStats: submitStatsGlobal {
                    acSubmissionNum {
                      difficulty
                      count
                      submissions
                        __typename
                    }
                    totalSubmissionNum {
                      difficulty
                      count
                      submissions
                       __typename
                      }
                     __typename
        }
    }    
} `;
module.exports = url;

