const user = {
	name: "Rupayan Neogy",
	last_post: "I took my cat on a walk today!"
};

renderNavbar(user);

function getStoryCard(storyText){
	const storyCard = document.createElement('div');
	storyCard.className = "card mt-4";

	const cardBody = document.createElement('div');
	cardBody.className = "card-body";
	storyCard.appendChild(cardBody);

	cardBody.innerText = storyText;
	return storyCard;
}

const postButton = document.getElementById('new-status-btn');
postButton.addEventListener('click', function(){
	const textInput = document.getElementById('new-status-text');
	const newStatus = textInput.value;
	const storiesDiv = document.getElementById('stories');

	storiesDiv.appendChild(getStoryCard(newStatus));
	
	textInput.value = '';
});