import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const MSG91_AUTH_KEY = Deno.env.get("MSG91_AUTH_KEY")!;

// Emails
const HR_EMAIL = "careers@phoenixrealesthatic.com";

// MSG91 Templates
const HR_TEMPLATE_ID = "1112202512";
const USER_TEMPLATE_ID = "11122025";

serve(async (req) => {
  try {
    if (!MSG91_AUTH_KEY) {
      return new Response(
        JSON.stringify({ error: "MSG91 API key missing" }),
        { status: 500 }
      );
    }

    const body = await req.json();

    if (!body?.name || !body?.email || !body?.mobile || !body?.position || !body?.file) {
      return new Response(
        JSON.stringify({ error: "Invalid payload" }),
        { status: 400 }
      );
    }
    
    const { name, email, mobile, position, file } = body;

    /* ---------------- HR EMAIL ---------------- */
    const hrResponse = await fetch("https://api.msg91.com/api/v5/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authkey: MSG91_AUTH_KEY,
        },
        body: JSON.stringify({
          to: [{ email: HR_EMAIL }],
          from: {
            email: "no-reply@phoenixtravelopedia.com",
            name: "Careers Portal",
          },
          template_id: HR_TEMPLATE_ID,
          variables: {
            VAR1:position,
            VAR2:name,
            VAR3:email,
            VAR4:mobile,
          },
          attachments: [
            {
              filename: file.name,
              content: file.data,
              type: file.type,
              disposition: "attachment",
            },
          ],
        }),
      }
    );

    if (!hrResponse.ok) {
      const err = await hrResponse.text();
      console.error("MSG91 HR ERROR:", err);
      return new Response(err, { status: 500 });
    }

    /* ---------------- USER AUTO REPLY ---------------- */
    await fetch("https://api.msg91.com/api/v5/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authkey: MSG91_AUTH_KEY,
      },
      body: JSON.stringify({
        to: [{ email }],
        from: {
          email: "no-reply@phoenixtravelopedia.com",
          name: "No Reply",
        },
        template_id: USER_TEMPLATE_ID,
        variables: {
          VAR1:position,
          VAR2:name,
        },
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

