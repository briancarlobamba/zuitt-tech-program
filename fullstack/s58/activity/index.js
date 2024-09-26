fetch("https://jsonplaceholder.typicode.com/posts")
.then(function(response){
	return response.json()
})
.then(function(data){
	showPosts(data)
})

const showPosts = function(posts) {

	let postEntries = '';

	posts.forEach(function(post) {

		postEntries += `
				<div id="post-${post.id}">
					<h3 id="post-title-${post.id}">${post.title}</h3>
					<p id="post-body-${post.id}">${post.body}</p>
					<button onclick="editPost('${post.id}')">Edit</button>
					<button onclick="deletePost('${post.id}')">Delete</button>
				</div>
	`;
	})

	//console.log(postEntries);

	document.querySelector('#div-post-entries').innerHTML = postEntries;
}


document.querySelector('#form-add-post').addEventListener('submit', function(event){

	event.preventDefault();

	let titleInput = document.querySelector('#txt-title');
	let bodyInput = document.querySelector('#txt-body');

	// console.log(titleInput.value);
	// console.log(bodyInput.value);
	// console.log("Hello! The form has been submitted!");

	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: 'POST',
		body: JSON.stringify({
			title: titleInput.value,
			body: bodyInput.value,
			userId: 1
		}),
		headers: {'Content-type': 'application/json'}
	})
	.then(function(response){
		return response.json()
	})
	.then(function(data){
		console.log(data);
		alert('Successfully added.');

		titleInput.value = null;
		bodyInput.value = null;
	});

	alert('Successfully added.');
});


const editPost = function(id) {
	let title = document.querySelector(`#post-title-${id}`).innerHTML;
	let body = document.querySelector(`#post-body-${id}`).innerHTML;

	document.querySelector('#txt-edit-id').value = id;
	document.querySelector('#txt-edit-title').value = title;
	document.querySelector('#txt-edit-body').value = body;
	document.querySelector('#btn-submit-update').removeAttribute('disabled');

}

// activity

document.querySelector('#form-edit-post').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let id = document.querySelector('#txt-edit-id').value;
    let title = document.querySelector('#txt-edit-title').value;
    let body = document.querySelector('#txt-edit-body').value;

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'PUT', 
        body: JSON.stringify({
            id: id,
            title: title,
            body: body,
            userId: 1
        }), 
        headers: { 'Content-type': 'application/json' } 
    })
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        console.log('Post updated:', data); 
        alert('Successfully updated.'); 

        document.querySelector('#txt-edit-id').value = ''; 
        document.querySelector('#txt-edit-title').value = '';
        document.querySelector('#txt-edit-body').value = '';

        document.querySelector('#btn-submit-update').setAttribute('disabled', true);
    });
});

const deletePost = function(id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE' 
    })
    .then(function(response) {
        console.log('Server response:', response); 
        
        alert('Post deleted successfully.');
        
        const postElement = document.querySelector(`#post-${id}`);
        if (postElement) {
            postElement.remove(); 
        }
    });
}

document.querySelector('#delete-all').addEventListener('click', function() {
    alert('All Posts Deleted');

    document.querySelector('#div-post-entries').innerHTML = ''; 
});
