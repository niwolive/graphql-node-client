// - Import GraphQL client
const gqlClient = require('./gqlClient');

// - Configurable variables
const token = process.env.GH_TOKEN;
const api = 'https://api.github.com/graphql';

// - Query variables
const sixMonthsAgo = (new Date(Date.now() - (183*24*3600*1000)))
                       .toISOString()
                       .split('T')[0]; // Getting the YYYY-MM-DD fromatted ISO date of 6 months ago
// - Queries
// Q0 (example) - find user niwolive
const sampleQuery = `query { 
                       search(query:"niwolive",type: USER,first:30)
                       { 
                         edges { 
                           node 
                         } 
                       } 
                     }`;

// Q1 - Top 5 repositories by stars in the last 6 months created by a user located in Taiwan 
const topCommiterOrgs = `query {
                           search(query:"created:>${sixMonthsAgo}",type: REPOSITORY,first:5)
                           { 
                             edges { 
                               node 
                             } 
                           } 
                         }`;
// Q2 - TODO Top 5 organizations with the most commits in the last 6 months
// Q2 -  
// Q3 - 
// Q4 - 
// Q5 - 
// Q6 - 
// Q7 - 

const query = {query: topCommiterOrgs};
const headers = {
  'User-Agent': 'graphql-node-client',
  'Authorization': `bearer ${token}`
}

gqlClient(api,query,headers);
