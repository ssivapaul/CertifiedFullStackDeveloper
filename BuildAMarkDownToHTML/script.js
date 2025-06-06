let markdown = document.getElementById("markdown-input");


let convertMarkdown = () => {
    let markDown = markdown.value;
    console.log(markDown)
  return (
    markDown
      // Headings: from ###### to #
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
};

markdown.addEventListener('input', () => {
    document.getElementById("html-output").textContent = convertMarkdown();
})

console.log(convertMarkdown());

/*

# heading 1
## heading 2
### heading 3
**bold text** and __bold text__
*italic text* and _italic text_
![cat](cat.jpg)
[Google](https://google.com)
> This is a quote.

*/
