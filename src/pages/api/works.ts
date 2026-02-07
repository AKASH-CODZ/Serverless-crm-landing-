import { IncomingMessage } from 'http';
import formidable from 'formidable';

export default async function handler(req: IncomingMessage, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const form = formidable();

  const [fields, files] = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      // Cast 'fields' as any to bypass the strict type check
      else resolve([fields as any, files]);
    });
  });

  // Process the uploaded files and fields here
  // For example, save files, send email, etc.

  res.status(200).json({ message: 'Upload successful' });
}