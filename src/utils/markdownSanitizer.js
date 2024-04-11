const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function SanitizeMarkdownContent(markdownContent) {
  const turndownService = new TurndownService();

  //1.Convert markdown to Html
  const convertedHtml = marked.parse(markdownContent);

  //2.Sanitize Html
  const santizedHtml = sanitizeHtmlLibrary(convertedHtml, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags,
  });

  //3.Convert the sanitized html to markdown
  const sanitizedMarkdown = turndownService.turndown(santizedHtml);

  return sanitizedMarkdown;
}

module.exports = SanitizeMarkdownContent;
