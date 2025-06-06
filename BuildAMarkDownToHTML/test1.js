
/*
Convert the following Markdown to corresponding HTML strings.
Markdown	                        --> HTML 
# heading 1	                        --> <h1>heading 1</h1> 
## heading 2	                    --> <h2>heading 2</h2> 
### heading 3	                    --> <h3>heading 3</h3> 
**bold text** or __bold text__	    --> <strong>bold text</strong> 
*italic text* or _italic text_	    --> <em>italic text</em> 
![alt-text](image-source)	        --> <img alt="alt-text" src="image-source"> 
[link text](URL)                    --> <a href="URL">link text</a> 
> quote	                            --> <blockquote>quote</blockquote>
*/

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

const input = `
# heading 1
## heading 2
### heading 3
**bold text** and __bold text__
*italic text* and _italic text_
![cat](cat.jpg)
[Google](https://google.com)
> This is a quote.
`;

console.log(convertMarkdownToHTML(input));

