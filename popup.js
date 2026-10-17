const loadBookmarksButton = document.getElementById("load-bookmarks");
const bookmarkList = document.getElementById("bookmark-list");

loadBookmarksButton.addEventListener("click", () => {
  bookmarkList.textContent = "ボタンがクリックされました!";
});