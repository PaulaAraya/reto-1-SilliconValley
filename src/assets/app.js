const textArea = document.getElementById('message');
const btn = document.getElementById('btn');
const postPrint = document.getElementById('printPost');
let arrayPost = [];

const saveComment = (post) => {
  arrayPost.push(post);
}

const deleteComment = (i) => {
  arrayPost.splice(i, 1);
  printComment(arrayPost);
};

const printComment = (posts) => {
  postPrint.innerHTML = '';
  posts.forEach((post, index) => {
    postPrint.innerHTML += `
    <p>${post}</p> <button onclick="deleteComment(${index})"> eliminar </button>
    `;
  })
};

btn.addEventListener('click', () => {
  let savePost = textArea.value;
  textArea.value = '';
  if (savePost === '') {
    alert("por favor escriba un texto")
  } else {
    saveComment(savePost);
    printComment(arrayPost);
  }
});
