export function onRequest({ request, next }) {
    if (request.url.endsWith('/health')) {
        return new Response('OK', { status: 200 });
    }
    return next();
}
