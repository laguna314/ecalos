// Cloudflare Pages Functions entrypoint
// Route POSTs from forms to simple handlers and (optionally) KV storage.
// Bind KV namespaces in Cloudflare dashboard (Settings > Functions > KV bindings), e.g. CONTACTS_KV, SUBSCRIBERS_KV.
export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);

  if (request.method === "POST" && url.pathname.startsWith("/api/")) {
    const form = await request.formData();
    const data = Object.fromEntries(form.entries());
    const stamp = new Date().toISOString();
    const record = { path: url.pathname, stamp, ...data };

    // Optional KV writes if bound
    try {
      if (url.pathname === "/api/contact" && env?.CONTACTS_KV) {
        await env.CONTACTS_KV.put(`contact:${stamp}`, JSON.stringify(record));
      }
      if (url.pathname === "/api/subscribe" && env?.SUBSCRIBERS_KV) {
        await env.SUBSCRIBERS_KV.put(`subscriber:${stamp}`, JSON.stringify(record));
      }
      if (url.pathname === "/api/volunteer" && env?.VOLUNTEERS_KV) {
        await env.VOLUNTEERS_KV.put(`volunteer:${stamp}`, JSON.stringify(record));
      }
      if (url.pathname === "/api/sponsor" && env?.SPONSORS_KV) {
        await env.SPONSORS_KV.put(`sponsor:${stamp}`, JSON.stringify(record));
      }
      if (url.pathname === "/api/donate" && env?.DONATIONS_KV) {
        await env.DONATIONS_KV.put(`donation:${stamp}`, JSON.stringify(record));
      }
    } catch (e) {
      console.error("KV error:", e);
    }

    const headers = { "Content-Type": "text/html; charset=utf-8" };
    return new Response(`
      <meta http-equiv="refresh" content="2; url=/" />
      <style>body{font-family:system-ui;background:#0b0b0f;color:#eee;display:grid;place-items:center;height:100dvh}</style>
      <div>
        <h1>Thanks!</h1>
        <p>Your submission was received.</p>
        <p><a href="/">Return to site</a></p>
      </div>
    `, { headers });
  }

  // Fallthrough to asset handler
  return context.next();
}
