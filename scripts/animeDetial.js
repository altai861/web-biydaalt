function showPage(pageId) {
    // Hide all content divs
    var contents = document.getElementsByClassName('main-side');
    for (var i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
  }