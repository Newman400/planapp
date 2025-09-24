export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || "";
  const isWindows = /windows/i.test(userAgent);

  if (isWindows) {
    // Force download from /public/example.pdf
    res.writeHead(302, {
      "Location": "/example.pdf", // first serve file
      "Content-Disposition": "attachment; filename=example.pdf",
    });
    res.end();
  } else {
    res.writeHead(302, { Location: "https://www.docusign.com" });
    res.end();
  }
}
