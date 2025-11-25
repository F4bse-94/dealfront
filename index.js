import { spawn } from "child_process";

const proc = spawn("npx", [
  "apidog-mcp-server@latest",
  "--site-id=359998"
]);

proc.stdout.on("data", (data) => process.stdout.write(data));
proc.stderr.on("data", (data) => process.stderr.write(data));
proc.on("close", (code) => {
  console.log("MCP server exited with code", code);
});

