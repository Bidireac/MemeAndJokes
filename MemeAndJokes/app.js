document.getElementById('laughGenerator').addEventListener('click', loadThemAll);

function loadThemAll(x) {
	loadJokes();
	loadMemes();
}

function loadJokes() {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://official-joke-api.appspot.com/jokes/ten', true);

	xhr.onload = function() {
		if (this.status === 200) {
			let jokes = JSON.parse(this.responseText);

			let output = '';

			for (let joke of jokes) {
				output += `
                <div class="card border-danger p-5 m-4">
                <div class="card-body text-danger">
                  <h5 class="card-title">${joke.setup}</h5>
                  <p class="card-text">${joke.punchline}</p>
                </div>
                </div>
				`;
			}

			document.getElementById('jokes').innerHTML = output;
		}
	};

	xhr.send();
}

function loadMemes() {
	const xhr = new XMLHttpRequest();

	xhr.open('GET', 'https://meme-api.herokuapp.com/gimme/12', true);

	xhr.onload = function() {
		if (this.status === 200) {
			let response = JSON.parse(this.responseText);

			let output = '';

			response.memes.forEach(function(meme) {
				output += `
                <div class="card col-4 p-1">
                <img class="card-img-top" src="${meme.url}">
                <div class="card-body d-flex flex-column">
                  <h5 class="card-title text-danger">${meme.title}</h5>
                  <a href="${meme.postLink}" target="_blank" class="btn btn-primary mt-auto">Original Post</a>
                </div>
              </div>
				`;
			});
			document.getElementById('memes').innerHTML = output;
		}
	};

	xhr.send();
}
