import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const MSG91_AUTH_KEY = Deno.env.get("MSG91_AUTH_KEY");

// Emails
const HR_EMAIL = "careers@phoenixrealesthatic.com";

// MSG91 Templates
const HR_TEMPLATE_ID = "1112202512";
const USER_TEMPLATE_ID = "11122025";

serve(async (req) => {
  try {
    if (!MSG91_AUTH_KEY) {
      return new Response(
        JSON.stringify({ error: "MSG91_AUTH_KEY missing" }),
        { status: 500 }
      );
    }

    const body = await req.json();

    if (
      !body?.name ||
      !body?.email ||
      !body?.mobile ||
      !body?.position ||
      !body?.file?.data
    ) {
      return new Response(
        JSON.stringify({ error: "Invalid payload" }),
        { status: 400 }
      );
    }

    const { name, email, mobile, position, file } = body;

    const hrRes = await fetch("https://api.msg91.com/api/v5/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: MSG91_AUTH_KEY,
      },
      body: JSON.stringify({
        to: [{ email: "no-reply@phoenixtravelopedia.com" }],
        domain: "phoenixtravelopedia.com",
        template_id: "HR_TEMPLATE_ID",
        variables: { VAR2:name, VAR3:email, VAR4:mobile, VAR1:position },
        attachments: [{
          filename: file.name,
          content: file.data,
          type: file.type,
        }],
      }),
    });

    if (!hrRes.ok) {
      const err = await hrRes.text();
      console.error("MSG91 HR ERROR:", err);
      return new Response(err, { status: 500 });
    }

    await fetch("https://api.msg91.com/api/v5/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        auth: MSG91_AUTH_KEY,
      },
      body: JSON.stringify({
        to: [{ email }],
        domain: "phoenixtravelopedia.com",
        template_id: "USER_TEMPLATE_ID",
        variables: { VAR2:name, VAR1:position },
      }),
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (err) {
    console.error("EDGE ERROR:", err);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
});
