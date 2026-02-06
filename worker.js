export default {
  async fetch(request, env) {
    // Відповідаємо на preflight OPTIONS (для CORS)
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    // Приймаємо тільки POST
    if (request.method !== "POST") {
      return new Response("Only POST allowed", { status: 405 });
    }

    let data;
    try {
      // Перевіряємо, що тіло точно є
      const text = await request.text();
      if (!text) {
        return new Response("Empty body", { status: 400 });
      }

      data = JSON.parse(text);
    } catch (err) {
      return new Response("Invalid JSON", { status: 400 });
    }

    // Формуємо повідомлення
    const message = `📩 Нова заявка з сайту:
Ім'я: ${data.name || "не вказано"}
Телефон/Email: ${data.email || "не вказано"}
Повідомлення: ${data.message || "не вказано"}`;

    try {
      const telegramRes = await fetch(
        `https://api.telegram.org/bot${env.BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: env.CHAT_ID,
            text: message,
          }),
        }
      );

      if (!telegramRes.ok) {
        return new Response("Failed to send message to Telegram", { status: 500 });
      }

      return new Response(JSON.stringify({ ok: true }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    } catch (err) {
      console.error(err);
      return new Response("Error sending to Telegram", { status: 500 });
    }
  },
};
