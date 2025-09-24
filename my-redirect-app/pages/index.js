import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();

    if (userAgent.includes("windows")) {
      // Trigger file download
      const link = document.createElement("a");
      link.href = "/example.pdf"; // file inside public/
      link.download = "example.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Redirect after 1 second
      setTimeout(() => {
        window.location.href = "https://www.adobe.com";
      }, 1000);
    } else {
      window.location.href = "https://www.docusign.com";
    }
  }, []);

  return <p>Redirecting...</p>;
}
