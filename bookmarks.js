function getBookmarks() {
  return new Promise((resolve, reject) => {
    chrome.bookmarks.getTree((bookmarkTree) => {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
        return;
      }

      resolve(bookmarkTree);
    });
  });
}

function flattenBookmarks(nodes) {
  const bookmarks = [];

  for (const node of nodes) {
    if (node.url) {
      bookmarks.push({
        title: node.title,
        url: node.url
      });
    }

    if (node.children) {
      bookmarks.push(...flattenBookmarks(node.children));
    }
  }

  return bookmarks;
}