function convertMarkdownToHTML(markdown) {
  return (
    markdown
      // Headings: from ###### to #
      .replace(/(?<=^|\s)######\s+(.*)/gm, "<h6>$1</h6>")
      .replace(/(?<=^|\s)#####\s+(.*)/gm, "<h5>$1</h5>")
      .replace(/(?<=^|\s)####\s+(.*)/gm, "<h4>$1</h4>")
      .replace(/(?<=^|\s)###\s+(.*)/gm, "<h3>$1</h3>")
      .replace(/(?<=^|\s)##\s+(.*)/gm, "<h2>$1</h2>")
      .replace(/(?<=^|\s)#\s+(.*)/gm, "<h1>$1</h1>")

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
}
