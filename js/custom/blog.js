const xhr = new XMLHttpRequest();
xhr.open("GET", "/json/blog.json", true);
xhr.onreadystatechange = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    const posts = JSON.parse(this.responseText);
    let postList = "";
    for (let i = 0; i < posts.posts.length; i++) {
      postList += `
        <div class="post">
            <div class=post-img>
                <img src="${posts.posts[i].image}">
             </div>
             <div class=post-content>
                <h2>${posts.posts[i].title}</h2>
                <p>Date: ${posts.posts[i].date}</p>
                <p class="content">${posts.posts[i].content}</p>
                <a href="#" class="blog-section-button"><span>Read Articles </span></a>
             </div>
        </div>
      `;
    }
    document.getElementById("posts").innerHTML = postList;
  }
};
xhr.send();