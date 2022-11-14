const blogNewPostButton = document.querySelector('.new-post-button');
const blogpostForm = document.querySelector('#blogpost-form');

const newPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#user-title-blogpost').value.trim();
  const description = document.querySelector('#user-description-post').value;

  if (title && description) {
    const response = await fetch('/api/blogpost', {
      method: 'POST',
      body: JSON.stringify({ title, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/')
    } else {
      alert(response.statusText)
    }
  }
};

blogNewPostButton.addEventListener('click', function () {
  blogpostForm.classList.remove('hide');
  blogNewPostButton.classList.add('hide')
})

document.querySelector('#blogpost-form').addEventListener('submit', newPostFormHandler);