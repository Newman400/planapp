export default function handler(req, res) {
  const userAgent = req.headers['user-agent'] || "";
  const isWindows = /windows/i.test(userAgent);

  if (isWindows) {
    // Redirect Windows users to PDF in public folder
    res.writeHead(302, { Location: "/example.pdf" });
    res.end();
  } else {
    // Redirect all other users to DocuSign
    res.writeHead(302, { Location: "https://www.docusign.com" });
    res.end();
  }
}
