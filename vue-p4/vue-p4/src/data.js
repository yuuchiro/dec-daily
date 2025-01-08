const key = "posts";

const posts = localStorage.getItem(key);
const postList = JSON.parse(posts);

export default {
  getAllPosts() {
    return postList;
  },

  getOnePost(id) {
    postList.forEach((post) => {
      if (post.postId == id) return post;
    });
    return -1;
  },

  getNewPosts() {
    return postList.reverse().slice(0, 4);
  },
};
