let markdown = document.getElementById("markdown-input");

let convertMarkdown = () => {
  let markDown = markdown.value;
  return (
    markDown
      // remove leading text ahead of #
      // Headings: from ### to #
      //.replace(/(?<=^|\s)###\s+(.*)/gm, '<h3>$1</h3>')
      //.replace(/(?<=^|\s)##\s+(.*)/gm, '<h2>$1</h2>')
      //.replace(/(?<=^|\s)#\s+(.*)/gm, '<h1>$1</h1>')
      .replace(/^ {0,3}###\s+(.*)$/gm, "<h3>$1</h3>")
      .replace(/^ {0,1}##\s+(.*)$/gm, "<h2>$1</h2>")
      .replace(/^ {0,1}#\s+(.*)$/gm, "<h1>$1</h1>")

      // Bold: **text** or __text__
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/__(.+?)__/g, "<strong>$1</strong>")

      // Italic: *text* or _text_
      .replace(/\*(?!\*)(.+?)\*/g, "<em>$1</em>")
      .replace(/_(?!_)(.+?)_/g, "<em>$1</em>")

      // Image: ![alt](src)
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">')

      // Link: [text](url)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')

      // Blockquote: > quote
      .replace(/^>\s?(.*)/gm, "<blockquote>$1</blockquote>")
  );
};

markdown.addEventListener("input", () => {
  document.getElementById("html-output").textContent = convertMarkdown();
  document.getElementById("preview").innerHTML = convertMarkdown();
});
