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
    <ul class="list-group list-group-flush" style="width: 100%;">
    <li class="list-group-item">
    <p class="card-text text-justify">${post}</p>
    <span>
    <i class="fas fa-trash-alt text-right" onclick="deleteComment(${index})"></i>
    </span> 
    </li>
    </ul>
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

