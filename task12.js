const user = {
    name: 'John',
    lastActivityTime: null,
    posts: []
  };
  
  function createPost(post) {
    return new Promise((resolve, reject) => {
      // Simulate post creation with a delay of 2 seconds
      setTimeout(() => {
        user.posts.push(post);
        console.log(`Post created: ${post}`);
        resolve();
      }, 2000);
    });
  }
  
  function deletePost(post) {
    return new Promise((resolve, reject) => {
      // Simulate post deletion with a delay of 2 seconds
      setTimeout(() => {
        const index = user.posts.indexOf(post);
        if (index !== -1) {
          user.posts.splice(index, 1);
          console.log(`Post deleted: ${post}`);
          resolve();
        } else {
          reject(`Post not found: ${post}`);
        }
      }, 2000);
    });
  }
  
  function updateLastUserActivityTime(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        user.lastActivityTime = new Date();
        console.log(`Last activity time for user ${user.name}: ${user.lastActivityTime}`);
        resolve();
      }, 1000);
    });
  }
  
  // Example usage
  Promise.all([
    createPost('First post'),
    updateLastUserActivityTime(user)
  ])
  .then(() => Promise.all([
    createPost('Second post'),
    updateLastUserActivityTime(user)
  ]))
  .then(() => Promise.all([
    createPost('Third post'),
    updateLastUserActivityTime(user)
  ]))
  .then(() => Promise.all([
    deletePost('Third post'),
    updateLastUserActivityTime(user)
  ]))
  .then(() => console.log(`New set of posts for user ${user.name}: ${user.posts}`))
  .catch(error => console.error(error));