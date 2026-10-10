export default {
  async fetch(request) {
    const url = new URL(request.url);
    const targetUrl = 'https://www.okx.com' + url.pathname + url.search;

    const newHeaders = new Headers(request.headers);
    newHeaders.set('Host', 'www.okx.com');

    return fetch(targetUrl, {
      method: request.method,
      headers: newHeaders,
    });
  }
};