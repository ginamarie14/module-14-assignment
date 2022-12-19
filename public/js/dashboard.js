const newPost = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#post-title').value.trim();
  //const needed_funding = document.querySelector('#project-funding').value.trim();
  const description = document.querySelector('#post-desc').value.trim();

  if (title && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create project');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Couldn\'t delete post');
    }
  }
};

document
  .querySelector('.newPost')
  .addEventListener('submit', newPost);

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);
