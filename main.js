function getNumberOrString(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
      return value
    } else {
      return number_value
    }
  }
  
  
  
  document.getElementById('create-comment').addEventListener('click', (event) => {
    let element_comment_name = document.getElementById('comment-name');
    element_comment_name.innerText = getNumberOrString(document.getElementById('name').value);
    let element_comment_age = document.getElementById('comment-age');
    element_comment_age.innerText = getNumberOrString(document.getElementById('age').value);
    let element_comment_email = document.getElementById('comment-email');
    element_comment_email.innerText = getNumberOrString(document.getElementById('email').value);
    let element_comment_comment = document.getElementById('comment-comment');
    element_comment_comment.innerText = getNumberOrString(document.getElementById('comment').value);
  
  });