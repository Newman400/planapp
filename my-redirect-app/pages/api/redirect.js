import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || "";
  const isWindows = /windows/i.test(userAgent);

  if (isWindows) {
    const filePath = path.join(process.cwd(), 'public', 'example.pdf');
    const stat = fs.statSync(filePath);

    res.writeHead(200, {
      'Content-Type': 'application/pdf',
      'Content-Length': stat.size,
      'Content-Disposition': 'attachment; filename="example.pdf"'
    });

    const readStream = fs.createReadStream(filePath);
    readStream.pipe(res);
  } else {
    res.redirect('https://www.docusign.com');
  }
}
