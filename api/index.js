import server from '../dist/server/server.js';
import { Readable } from 'node:stream';

export default async function handler(req, res) {
  // Construct the full URL for the Web Request
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const fullUrl = `${protocol}://${host}${req.url}`;

  // Create Web Request body (Node 18+ Request supports iterables/streams)
  let body = undefined;
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    // Collect the body from the incoming request
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    body = Buffer.concat(buffers);
  }

  // Create standard Web Request
  const webRequest = new Request(fullUrl, {
    method: req.method,
    headers: req.headers,
    body,
  });

  // Call the TanStack Start SSR server
  const webResponse = await server.fetch(webRequest, process.env, {});

  // Send the status and headers back to Vercel Node response
  res.statusCode = webResponse.status;
  res.statusMessage = webResponse.statusText;
  webResponse.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  // Pipe the Web Response body back to Vercel
  if (webResponse.body) {
    if (typeof webResponse.body.getReader === 'function') {
      const reader = webResponse.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        if (value) res.write(value);
      }
      res.end();
    } else {
      // If it's not a stream, just send the buffer/text
      const text = await webResponse.text();
      res.end(text);
    }
  } else {
    res.end();
  }
}