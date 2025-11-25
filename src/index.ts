import { spawn } from "child_process";
import process from "node:process";

console.log("Starting Dealfront MCP proxy...");

const child = spawn("npx", [
  "apidog-mcp-server@latest",
  "--site-id=359998"
], {
  stdio: "inherit",
  shell: true
});

child.on("exit", (code) => {
  console.log("Dealfront MCP server exited with code", code);
  process.exit(code ?? 0);
});
