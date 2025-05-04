var posts=["2025/05/05/hello-world/","2025/05/04/胡言乱语/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };