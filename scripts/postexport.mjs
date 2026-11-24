import { writeFileSync } from "node:fs";
import { join } from "node:path";

const href = "/en/";
const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="refresh" content="0;url=${href}" />
    <link rel="canonical" href="${href}" />
    <title>Redirecting…</title>
    <script>window.location.replace(${JSON.stringify(href)});</script>
  </head>
  <body>
    <p>Redirecting to <a href="${href}">English portfolio</a>…</p>
  </body>
</html>
`;

writeFileSync(join(process.cwd(), "out", "index.html"), html);
console.log("Wrote static root redirect to out/index.html");
