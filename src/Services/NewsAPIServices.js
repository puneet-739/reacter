const constants = require('../Constants/constants');

const newsAPIUrl = `https://newsapi.org/v2/everything?q=india&apiKey=${constants.NEWS_API_KEY}`;

var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

module.exports = fetch(newsAPIUrl, requestOptions)
  .then(response => response.json())
  .then(result => result)
  .catch(error => console.log('error', error));

// const newsapi = new NewsAPI(constants.NEWS_API_KEY);

// const res = async () => {
//     newsapi.v2.topHeadlines({
//         // sources: 'bbc-news,the-verge',
//         // q: 'bitcoin',
//         // category: 'business',
//         language: 'en',
//         country: 'us'
//       }).then(response => {
//         console.log(response);
//         return response;
//         /*
//           {
//             status: "ok",
//             articles: [...]
//           }
//         */
//       });
// }

// const result = async (async () => {
//     await res();
// }) ();
// console.log(result);

// module.exports = new Promise((resolve, reject) => {
//         newsapi.v2.topHeadlines({
//         // sources: 'bbc-news,the-verge',
//         // q: 'bitcoin',
//         // category: 'business',
//         language: 'en',
//         country: 'us'
//       }).then(response => {
//         resolve(response);
//         /*
//           {
//             status: "ok",
//             articles: [...]
//           }
//         */
//       });
// });

// res.then(res => res);




