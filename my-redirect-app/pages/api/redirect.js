export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || "";
  const isWindows = /windows/i.test(userAgent);

  if (isWindows) {
    // Redirect Windows users directly to the PDF
    res.redirect('https://yourproject.vercel.app/example.pdf');
  } else {
    res.redirect('https://www.docusign.com');
  }
}
