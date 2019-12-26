const userTypes = `
  # User definition types
  type User {
    id: ID!
    name: String!
    email: String!
    photo: String
    createdAt: String!
    updatedAt: String!
  }

  input UserCreateInput {
    name: String!
    email: String!
    password: String!
  }

  input UserUpdateInput {
    name: String!
    email: String!
    photo: String!
  }

  input UserUpdatePasswordInput {
    password: String!
  }
`;

const userQueries = `
  users(first: Int, offset: Int): [ User! ]!
  user(id: ID!): User
`;

const userMutation = `
  createUser(input: UserCreateInput!): User
  updateUser(id: ID!, iput: UserUpdateInput!): User
  updateUserPassword(id: ID!, input: UserUpdatePasswordInput!): Boolean
  deleteUser(id: ID!): Boolean
  `;

export { userTypes, userQueries, userMutation };
