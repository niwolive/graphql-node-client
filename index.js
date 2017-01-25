// - Configurable variables
const api = 'https://api.github.com/graphql'
const token = process.env.GH_TOKEN;
const query = querystring.stringify({
  "query": "query { viewer { login }}"
});;

// - Generic GraphQL client below
const lib = api.startsWith('https://') ? require('https') : require('http');
const options = {
  hostname: api,
  method: 'POST',
  headers: {'Authorization': `bearer ${token}`},
};

// Construct the request object
const request = lib.request(options, (res) => {
  res.setEncoding('utf8');
  res.on('data', chunk => console.log(chunk));
  res.on('end', () => console.log("request completed"));
});

request.on('error', err => new Error(`The request halted: ${err.message}`));

// Send the query
request.write(query);
request.end();
