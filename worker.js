addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  if (request.method !== 'POST') {
    return new Response('Only POST allowed', { status: 405 })
  }

  const data = await request.json()

  // Встав сюди свій BOT_TOKEN і CHAT_ID як змінні середовища
  const token = BOT_TOKEN // встав через Cloudflare secrets
  const chat_id = CHAT_ID

  await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id,
      text: `Нова заявка!\nІм'я: ${data.name}\nТелефон: ${data.phone}\nПовідомлення: ${data.message}`
    })
  })

  return new Response(JSON.stringify({ ok: true }))
}
