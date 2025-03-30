# WikiPortraits Documentation Site

Simple static site for [WikiPortraits](https://www.wikiportraits.org/)
that displays Google Docs as webpages.

## Adding pages
### Google Doc ID
1. Open your Google Doc
2. Click File → Share → Publish to web
3. Publish as a link and copy the ID
4. Copy the ID from the provided URL (the long string after `/d/e/`)
### Create Page
Here is the template for a new page. Fill in the {TITLE}, {DESCRIPTION}, and {DOC_ID} (DOC_ID being the ID from above).

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="robots" content="noindex">
  <title>WikiPortraits Docs - {TITLE}</title>
  <meta name="description" content="WikiPortraits documentation on {DESCRIPTION}.">
  <meta name="author" content="WikiPortraits">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="favicon.ico">
  <link rel="stylesheet" href="meta/styles.css">
</head>

<body style="margin: 0; max-width: initial;">
  <div id="app"></div>
  <script>
    const DOC_ID = '{DOC_ID}';
  </script>
  <script src="meta/index.js"></script>
</body>
</html>
```
