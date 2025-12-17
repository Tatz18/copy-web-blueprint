import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

const MSG91_AUTH_KEY = Deno.env.get("MSG91_API_KEY")!;

// Emails
const HR_EMAIL = "careers@phoenixrealesthatic.com";

// MSG91 Templates
const HR_TEMPLATE_ID = "1112202512";
const USER_TEMPLATE_ID = "11122025";

serve(async (req) => {
  try {
    const { name, email, mobile, position, file } = await req.json();

    if (!name || !email || !mobile || !position || !file) {
      return new Response(
        JSON.stringify({ error: "Invalid payload" }),
        { status: 400 }
      );
    }

    /* ---------------- HR EMAIL ---------------- */
    const hrPayload = {
      to: [{ email: HR_EMAIL }],
      from: {
        email: "no-reply@phoenixtravelopedia.com",
        name: "Careers Portal",
      },
      template_id: HR_TEMPLATE_ID,
      variables: {
        VAR2:name,
        VAR3:email,
        VAR4:mobile,
        VAR1:position,
      },
      attachments: [
        {
          filename: file.name,
          content: file.data,
          type: file.type,
          disposition: "attachment",
        },
      ],
    };

    await fetch("https://api.msg91.com/api/v5/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authkey: MSG91_AUTH_KEY,
      },
      body: JSON.stringify(hrPayload),
    });

    /* ---------------- USER AUTO REPLY ---------------- */
    const userPayload = {
      to: [{ email }],
      from: {
        email: "no-reply@phoenixtravelopedia.com",
        name: "HR Team",
      },
      template_id: USER_TEMPLATE_ID,
      variables: {
        VAR2:name,
        VAR1:position,
      },
    };

    await fetch("https://api.msg91.com/api/v5/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authkey: MSG91_AUTH_KEY,
      },
      body: JSON.stringify(userPayload),
    });

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Server error" }),
      { status: 500 }
    );
  }
});

