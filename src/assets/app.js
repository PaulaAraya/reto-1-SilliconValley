const textArea = document.getElementById('message');
const btn = document.getElementById('btn');
const postPrint = document.getElementById('printPost');
let arrayPost = [];

const saveComment = (post) => { 
  arrayPost.push(post);
  postPrint.innerHTML = '';
}

const deleteComment = (i) => {
  arrayPost.splice(i,1);
// Eliminamos el hijo (childpost) del elemento padre
for ( i ; i < postPrint.children.length; i++) {
  let postChild = postPrint.children[i]
  postPrint.remove(postChild )
}
};

const printComment = (posts) => {
  postPrint.innerHTML = '';
  posts.forEach((post, index) => {
    postPrint.innerHTML += `
    <p>${post}</p> <button onclick="deleteComment(${index})"> eliminar </button>
    `;
    console.log(index);
  })
};

btn.addEventListener('click',()=> {
      let savePost = textArea.value;
      textArea.value = '';
      if (savePost === ''){
        alert("por favor escriba un texto")
      }else{
      saveComment(savePost);
      printComment(arrayPost);
      console.log(arrayPost);
    }
    });
