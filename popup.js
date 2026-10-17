
const loadBookmarksButton = document.getElementById("load-bookmarks");
const bookmarkList = document.getElementById("bookmark-list");

loadBookmarksButton.addEventListener("click", async () => {
  bookmarkList.textContent = "取得中...";

  try {
    const bookmarkTree = await getBookmarks();
    const bookmarks = flattenBookmarks(bookmarkTree);

    bookmarkList.replaceChildren();

    if (bookmarks.length === 0) {
      bookmarkList.textContent = "ブックマークがありません。";
      return;
    }

    for (const bookmark of bookmarks) {
      const item = document.createElement("div");
      const title = document.createElement("p");
      const link = document.createElement("a");

      title.textContent = bookmark.title || "タイトルなし";
      link.textContent = bookmark.url;
      link.href = bookmark.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";

      const parsedUrl = new URL(bookmark.url);

      if (!["http:", "https:"].includes(parsedUrl.protocol)) {
        link.removeAttribute("href");
        link.textContent = bookmark.url;
      }

      item.append(title, link);
      bookmarkList.appendChild(item);
    }

    console.log("取得したブックマーク:", bookmarks);
  } catch (error) {
    bookmarkList.textContent = "取得に失敗しました。";
    console.error(error);
  }
});
