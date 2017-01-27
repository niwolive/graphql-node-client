module.exports = (endpoint, query, headers) => {
  const url = require('url');
  let locator;
  let lib;

  try {
    // get the protocol from the URL of the endpoint
    locator = url.parse(endpoint);
    lib = require(locator.protocol.split(':')[0]);
  } catch (err){
    throw new Error(`Error in parsing the endpoints' protocol: ${err.message}`);
  }

  const options = {
    hostname: locator.hostname,
    path: locator.path,
    method: 'POST',
    headers: headers
  };

  // Construct the request object
  const request = lib.request(options, res => {
    res.setEncoding('utf8');
    res.on('data', chunk => console.log(chunk));
    res.on('end', () => console.log("request completed"));
  });

  request.on('error', err => new Error(`The request halted: ${err.message}`));

  // Send the query
  request.write(query);
  request.end();
}

