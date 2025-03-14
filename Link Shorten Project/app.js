import { readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";

// ✅ Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = createServer(async (req, res) => {
  console.log(req.url);

  if (req.method === "GET") {
    let filePath;
    let contentType = "text/html"; // Default to HTML

    if (req.url === "/") {
      filePath = path.resolve(__dirname, "index.html");
    } else {
      filePath = path.resolve(__dirname, "." + req.url); // Serve requested file
      const ext = path.extname(filePath);

      // ✅ Set correct Content-Type for different file types
      const mimeTypes = {
        ".html": "text/html",
        ".css": "text/css",
        ".js": "text/javascript",
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".json": "application/json",
      };
      contentType = mimeTypes[ext] || "text/plain";
    }

    try {
      const data = await readFile(filePath);
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    } catch (err) {
      console.error("Error reading file:", filePath, err);
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  }
});

server.listen(3002, () => {
  console.log(`Server is running on http://localhost:3002`);
});
