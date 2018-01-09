function newNavbarItem(text, url) {
	// create an <a> element with text inside it, linking to url, and return the element
	// also need to add the bootstrap classes "nav-item" and "nav-link"
	const navItem = document.createElement('a');
	navItem.className = "nav-item nav-link";
	navItem.innerHTML = text;
	navItem.href = url;

	return navItem;
}

function renderNavbar(user) {
  const navbarDiv = document.getElementById('nav-item-container');

  navbarDiv.appendChild(newNavbarItem('Home', '#'));
  navbarDiv.appendChild(newNavbarItem('Profile', '#'));
}