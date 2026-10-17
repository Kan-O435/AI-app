const loadBookmarksButton = document.getElementById("load-bookmarks");
const bookmarkList = document.getElementById("bookmark-list");

loadBookmarkButton.addEventListener("click", () => {
  bookmarkList.textContent = "ボタンがクリックされました!";
});