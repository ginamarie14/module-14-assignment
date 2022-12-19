async function newPost(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="postTitle"]').value;
    const postText = document.querySelector('input[name="postText"]').value;
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        postText
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.newPostAction').addEventListener('submit', newPost);