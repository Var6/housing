import emailjs from "@emailjs/browser";

export type EmailPayload = {
  name: string;
  mobile: string;
  city?: string;
  email?: string;
  message?: string;
  type?: string;   // page / product
  source?: string; // popup, hero, footer
  time?: string;
};

export const sendEmail = async (data: EmailPayload) => {
  try {
    const payload = {
      ...data,
      time: data.time || new Date().toLocaleString("en-IN"),
      type: data.type || window.location.pathname,
    };

    return await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      payload,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );
  } catch (error) {
    console.error("EmailJS Error:", error);
    throw error;
  }
};
