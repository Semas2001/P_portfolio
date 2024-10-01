// pages/api/sentry.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await axios.post(
        'https://o4508024644829184.ingest.de.sentry.io/api/4508024647254096/envelope/',
        req.body,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Sentry sentry_key=${process.env.SENTRY_KEY}`,
          },
        }
      );
      res.status(response.status).json(response.data);
    } catch (error) {
      res.status(error.response ? error.response.status : 500).json(error.response ? error.response.data : { error: 'Server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
