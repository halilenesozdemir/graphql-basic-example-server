export const typeDefs = `#graphql 
type Post {
  id: ID!
  title:String!
  description:String!
  url:String!
}
  type Query {
    getPosts: [Post]
    getPost(postId:ID!):Post
  }

  input Input{
    title:String!
    description:String!
    url:String!
  }

  type Mutation{
    createPost(body:Input!):Post!
  }
`;
