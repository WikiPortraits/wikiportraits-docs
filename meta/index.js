const app = document.getElementById('app');

const showError = message => {
  console.error('Error:', message);
  app.className = '';
  app.innerHTML = `<div class="error-message">${message}</div>`;
};

if (typeof DOC_ID === 'undefined') {
  showError('DOC_ID must be defined');
}

const createHeader = () => {
  const header = document.createElement('header');
  header.id = 'page-header';
  header.innerHTML = `
    <img src="meta/logo.png" alt="WikiPortraits">
    <a href="https://www.wikiportraits.org/instructions" class="page-header-link">« Back to Instructions</a>
  `;
  return header;
};

(async () => {
  try {
    app.className = 'loading';
    
    // Fetch and parse document
    const response = await fetch(`https://docs.google.com/document/d/e/${DOC_ID}/pub`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const doc = new DOMParser().parseFromString(await response.text(), 'text/html');
    const contents = doc.getElementById('contents');
    if (!contents?.children?.length) throw new Error('Invalid document structure');
    const [styles, body] = contents.children;
    
    // Style and display content
    Object.assign(body.style, { maxWidth: '800px', margin: '0 auto' });
    app.style.display = 'none';
    document.body.append(createHeader(), styles, body);
    document.title = doc.title || 'WikiPortraits Docs';
    document.body.style.backgroundColor = window.getComputedStyle(body).backgroundColor;
  } catch (error) {
    showError(error.message);
  }
})();