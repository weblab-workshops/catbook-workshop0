const user = {
	name: "Rupayan Neogy",
	last_post: "I took my cat on a walk today!"
};

renderNavbar(user);

const postButton = document.getElementById('new-status-btn');
postButton.addEventListener('click', function(){
	const textInput = document.getElementById('new-status-text');
	const newStatus = textInput.value;
	const storiesDiv = document.getElementById('stories');

	const newStory = document.createElement('div');
	newStory.innerText = newStatus;
	storiesDiv.appendChild(newStory);
	
	textInput.value = '';
});