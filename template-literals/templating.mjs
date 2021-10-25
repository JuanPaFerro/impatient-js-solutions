export function arrayWithObjectsToTable(data) {
  return `<table>
${data
  .map((d) => `  <tr><td>${d.last}</td><td>${d.first}</td></tr>`)
  .join("\n")}
</table>`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;") // first!
    .replace(/>/g, "&gt;")
    .replace(/</g, "&lt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/`/g, "&#96;");
}

export function arrayToUnorderedListWithEscaping(data) {
  return `<ul>
${data.map((d) => `  <li>${escapeHtml(d)}</li>`).join("\n")}
</ul>`;
}
