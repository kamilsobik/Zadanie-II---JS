const form = document.getElementById('data')

const allPosts = []

const addPost = event => {
	event.preventDefault()

	const input = document.getElementById('input')
	console.log(input)

	const post = {
		id: allPosts.length + 1,
		title: input.value,
		likesCount: 0,
	}

	allPosts.push(post)
	console.log(allPosts)

	document.querySelector('#numberPost').textContent = `Liczba postów:  ${allPosts.length}`
	show()
}

form.addEventListener('submit', addPost)

function show() {
	const html = allPosts
		.map(
			post => `
      <div id=${post.id}>
        <p>${post.title}.</p>
        <p>Liczba lajków:${post.likesCount}</p>
        <p>
          <button id="like-${post.id} "> +5 </button>
          <button id="dislike-${post.id}"> -10 </button>
        </p>



      </div>`
		)
		.join('')

	document.querySelector('#postsContainer').innerHTML = html
}

document.querySelector('#postsContainer').addEventListener('click', event => {
	console.log(event)
	const id = event.target.id
	const btnType = id.split('-')[0]
	const postId = parseInt(id.split('-')[1])
	console.log(btnType, postId, id)
	if (btnType === 'like') {
		allPosts[postId - 1].likesCount = allPosts[postId - 1].likesCount + 5
		console.log('likeclick')
		show()
	}
	if (btnType === 'dislike') {
		allPosts[postId - 1].likesCount = allPosts[postId - 1].likesCount - 10
		console.log('dislikeclick')
		show()
	}
})
