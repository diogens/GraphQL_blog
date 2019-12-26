const postTypes = `
  type Post {
    id: ID!
    title: String!
    comment: String!
    photo: String!
    createdAt: String!
    updatedAt: String!
    author: User!
    comments: [ Comment!]
  }

  input PostInput {
    title: String!
    content: String!
    photo: String!
    author: Int!
  }
`;

const postQueries = `
  post(first: Int, offeset: Int): [ Post! ]!
  post(id: ID!): Post
`;

const postMutations = `
  createPost(input: PostInput!): Post
  updatePost(id: ID!, input: PostInput!): Post
  deletePost(id: ID!): Boolean
`;

export { postTypes, postQueries, postMutations };
