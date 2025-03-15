import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { createServer } from "http";
import crypto from "crypto";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const loadLinks = async () => {
  try {
    const data = await fs.readFile(path.resolve(__dirname, "links.json"));
    return JSON.parse(data);
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.writeFile(path.resolve(__dirname, "links.json"), "{}");
      return {};
    }
    throw err;
  }
};

const saveLinks = async (links) => {
  await fs.writeFile(
    path.resolve(__dirname, "links.json"),
    JSON.stringify(links)
  );
};

const server = createServer(async (req, res) => {
  console.log(req.url);

  if (req.method === "GET") {
    let filePath;
    let contentType = "text/html";

    if (req.url === "/") {
      filePath = path.resolve(__dirname, "index.html");
    } else {
      filePath = path.resolve(__dirname, "." + req.url);
      const ext = path.extname(filePath);

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
      const data = await fs.readFile(filePath);
      res.writeHead(200, { "Content-Type": contentType });
      res.end(data);
    } catch (err) {
      console.error("Error reading file:", filePath, err);
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("404 Not Found");
    }
  } else if (req.method == "POST" && req.url === "/submit") {
    const links = await loadLinks();
    let chunk = "";
    req.on("data", (data) => {
      chunk += data;
    });

    req.on("end", async () => {
      console.log("Received body data:", chunk);
      const { url, shortCode } = JSON.parse(chunk);
      if (!url) {
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end("400 Bad Request");
      }
      const finalShortCode = shortCode || crypto.randomBytes(3).toString("hex");
      console.log("finalShortCode", finalShortCode);
      if (links[finalShortCode]) {
        res.writeHead(409, { "Content-Type": "text/plain" });
        res.end("409 Conflict");
        return;
      }
      links[finalShortCode] = url;
      await saveLinks(links);
      res.end(JSON.stringify({ shortCode: finalShortCode }));
    });
  }
});

server.listen(3002, () => {
  console.log(`Server is running on http://localhost:3002`);
});
