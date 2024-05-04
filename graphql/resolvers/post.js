import PostSchema from "../../models/post.js";

export const resolvers = {
  Query: {
    getPosts: async () => {
      try {
        const allPosts = await PostSchema.find();
        return allPosts;
      } catch (error) {
        console.log(error);
      }
    },
    getPost: async (_, { postId }) => {
      try {
        const getPost = await PostSchema.findById(postId);
        return getPost;
      } catch (error) {
        console.log(error);
      }
    },
  },
  Mutation: {
    createPost: async (_, { body }) => {
      try {
        const createPost = await PostSchema.create(body);
        return createPost;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
