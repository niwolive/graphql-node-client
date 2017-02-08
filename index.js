// - Import GraphQL client
const gqlClient = require('./gqlClient');

// - Configurable variables
const token = process.env.GH_TOKEN;
const api = 'https://api.github.com/graphql';

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

// Q1 - FIXME Top 5 organizations with the most commits in the last 6 months
const topCommiterOrgs = `query {
                           search(query:"",type: REPOSITORY,first:30)
                           { 
                             edges { 
                               node 
                             } 
                           } 
                         }`;
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
