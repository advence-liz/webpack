export function Post(url, data) {
  // Default options are marked with *
  return fetch(url, {
    body: JSON.stringify(data), // must match 'Content-Type' header
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer' // *client, no-referrer
  }).then(response => response.json()) // parses response to JSON
}

export function Get(url, data) {
  return fetch(url)
    .then(response => response.json())
    .then((myJson) => {
      console.log(myJson)
    })
}
// const formData = new FormData()
// const fileField = document.querySelector("input[type='file']")

// formData.append('username', 'abc123')
// formData.append('avatar', fileField.files[0])

export function PostFormData(url, data) {
  return fetch(url, {
    method: 'PUT',
    body: data
  })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
}

export default {
  get: Get,
  post: Post,
  postFormData: PostFormData
}
