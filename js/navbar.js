function newNavbarItem(text, url) {
	// create an <a> element with text inside it, linking to url, and return the element
}

function renderNavbar(user) {
  const navbarDiv = document.getElementById('nav-item-container');

  navbarDiv.appendChild(newNavbarItem('Home', '#'));
  navbarDiv.appendChild(newNavbarItem('Profile', '#'));
}