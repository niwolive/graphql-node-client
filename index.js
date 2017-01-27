// - Import GraphQL client
const gqlClient = require('./gqlClient');

// - Configurable variables
const token = process.env.GH_TOKEN;
const api = 'https://api.github.com/graphql';
const query = `{
                 "query": "query { viewer { login }}"
               }`;
const headers = {
  'User-Agent': 'graphql-node-client',
  'Authorization': `bearer ${token}`
}

gqlClient(api,query,headers);
