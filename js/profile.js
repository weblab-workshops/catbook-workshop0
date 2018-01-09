const user = {
	name: "Rupayan Neogy",
	last_post: "I took my cat on a walk today!"
};

function renderUserData(aUser){
	document.getElementById('profile-name').innerText = aUser.name;
	document.getElementById('profile-status').innerText = aUser.last_post;
}

renderUserData(user);
renderNavbar(user);