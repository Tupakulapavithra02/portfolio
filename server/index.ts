import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body as {
    name: string;
    email: string;
    message: string;
  };

  if (!name || !email || !message) {
    res.status(400).json({ error: 'All fields are required.' });
    return;
  }

  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: 'pavithratupakula1@gmail.com',
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    html: `
      <h2>New message from your portfolio</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${message}</p>
    `,
  });

  if (error) {
    console.error('Resend error:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
    return;
  }

  res.json({ success: true });
});

const PORT = 3001;
app.listen(PORT, () => console.log(`API server running on http://localhost:${PORT}`));
