"use strict";
exports.__esModule = true;
exports.typeDefs = "type AggregatePost {\n  count: Int!\n}\n\ntype AggregateUser {\n  count: Int!\n}\n\ntype BatchPayload {\n  count: Long!\n}\n\nscalar Long\n\ntype Mutation {\n  createPost(data: PostCreateInput!): Post!\n  updatePost(data: PostUpdateInput!, where: PostWhereUniqueInput!): Post\n  updateManyPosts(data: PostUpdateManyMutationInput!, where: PostWhereInput): BatchPayload!\n  upsertPost(where: PostWhereUniqueInput!, create: PostCreateInput!, update: PostUpdateInput!): Post!\n  deletePost(where: PostWhereUniqueInput!): Post\n  deleteManyPosts(where: PostWhereInput): BatchPayload!\n  createUser(data: UserCreateInput!): User!\n  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User\n  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!\n  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!\n  deleteUser(where: UserWhereUniqueInput!): User\n  deleteManyUsers(where: UserWhereInput): BatchPayload!\n}\n\nenum MutationType {\n  CREATED\n  UPDATED\n  DELETED\n}\n\ninterface Node {\n  id: ID!\n}\n\ntype PageInfo {\n  hasNextPage: Boolean!\n  hasPreviousPage: Boolean!\n  startCursor: String\n  endCursor: String\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  published: Boolean!\n  author: User\n}\n\ntype PostConnection {\n  pageInfo: PageInfo!\n  edges: [PostEdge]!\n  aggregate: AggregatePost!\n}\n\ninput PostCreateInput {\n  title: String!\n  published: Boolean\n  author: UserCreateOneWithoutPostsInput\n}\n\ninput PostCreateManyWithoutAuthorInput {\n  create: [PostCreateWithoutAuthorInput!]\n  connect: [PostWhereUniqueInput!]\n}\n\ninput PostCreateWithoutAuthorInput {\n  title: String!\n  published: Boolean\n}\n\ntype PostEdge {\n  node: Post!\n  cursor: String!\n}\n\nenum PostOrderByInput {\n  id_ASC\n  id_DESC\n  title_ASC\n  title_DESC\n  published_ASC\n  published_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n}\n\ntype PostPreviousValues {\n  id: ID!\n  title: String!\n  published: Boolean!\n}\n\ninput PostScalarWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  title: String\n  title_not: String\n  title_in: [String!]\n  title_not_in: [String!]\n  title_lt: String\n  title_lte: String\n  title_gt: String\n  title_gte: String\n  title_contains: String\n  title_not_contains: String\n  title_starts_with: String\n  title_not_starts_with: String\n  title_ends_with: String\n  title_not_ends_with: String\n  published: Boolean\n  published_not: Boolean\n  AND: [PostScalarWhereInput!]\n  OR: [PostScalarWhereInput!]\n  NOT: [PostScalarWhereInput!]\n}\n\ntype PostSubscriptionPayload {\n  mutation: MutationType!\n  node: Post\n  updatedFields: [String!]\n  previousValues: PostPreviousValues\n}\n\ninput PostSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: PostWhereInput\n  AND: [PostSubscriptionWhereInput!]\n  OR: [PostSubscriptionWhereInput!]\n  NOT: [PostSubscriptionWhereInput!]\n}\n\ninput PostUpdateInput {\n  title: String\n  published: Boolean\n  author: UserUpdateOneWithoutPostsInput\n}\n\ninput PostUpdateManyDataInput {\n  title: String\n  published: Boolean\n}\n\ninput PostUpdateManyMutationInput {\n  title: String\n  published: Boolean\n}\n\ninput PostUpdateManyWithoutAuthorInput {\n  create: [PostCreateWithoutAuthorInput!]\n  delete: [PostWhereUniqueInput!]\n  connect: [PostWhereUniqueInput!]\n  disconnect: [PostWhereUniqueInput!]\n  update: [PostUpdateWithWhereUniqueWithoutAuthorInput!]\n  upsert: [PostUpsertWithWhereUniqueWithoutAuthorInput!]\n  deleteMany: [PostScalarWhereInput!]\n  updateMany: [PostUpdateManyWithWhereNestedInput!]\n}\n\ninput PostUpdateManyWithWhereNestedInput {\n  where: PostScalarWhereInput!\n  data: PostUpdateManyDataInput!\n}\n\ninput PostUpdateWithoutAuthorDataInput {\n  title: String\n  published: Boolean\n}\n\ninput PostUpdateWithWhereUniqueWithoutAuthorInput {\n  where: PostWhereUniqueInput!\n  data: PostUpdateWithoutAuthorDataInput!\n}\n\ninput PostUpsertWithWhereUniqueWithoutAuthorInput {\n  where: PostWhereUniqueInput!\n  update: PostUpdateWithoutAuthorDataInput!\n  create: PostCreateWithoutAuthorInput!\n}\n\ninput PostWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  title: String\n  title_not: String\n  title_in: [String!]\n  title_not_in: [String!]\n  title_lt: String\n  title_lte: String\n  title_gt: String\n  title_gte: String\n  title_contains: String\n  title_not_contains: String\n  title_starts_with: String\n  title_not_starts_with: String\n  title_ends_with: String\n  title_not_ends_with: String\n  published: Boolean\n  published_not: Boolean\n  author: UserWhereInput\n  AND: [PostWhereInput!]\n  OR: [PostWhereInput!]\n  NOT: [PostWhereInput!]\n}\n\ninput PostWhereUniqueInput {\n  id: ID\n}\n\ntype Query {\n  post(where: PostWhereUniqueInput!): Post\n  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post]!\n  postsConnection(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PostConnection!\n  user(where: UserWhereUniqueInput!): User\n  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!\n  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!\n  node(id: ID!): Node\n}\n\ntype Subscription {\n  post(where: PostSubscriptionWhereInput): PostSubscriptionPayload\n  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload\n}\n\ntype User {\n  id: ID!\n  email: String\n  name: String!\n  posts(where: PostWhereInput, orderBy: PostOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Post!]\n}\n\ntype UserConnection {\n  pageInfo: PageInfo!\n  edges: [UserEdge]!\n  aggregate: AggregateUser!\n}\n\ninput UserCreateInput {\n  email: String\n  name: String!\n  posts: PostCreateManyWithoutAuthorInput\n}\n\ninput UserCreateOneWithoutPostsInput {\n  create: UserCreateWithoutPostsInput\n  connect: UserWhereUniqueInput\n}\n\ninput UserCreateWithoutPostsInput {\n  email: String\n  name: String!\n}\n\ntype UserEdge {\n  node: User!\n  cursor: String!\n}\n\nenum UserOrderByInput {\n  id_ASC\n  id_DESC\n  email_ASC\n  email_DESC\n  name_ASC\n  name_DESC\n  createdAt_ASC\n  createdAt_DESC\n  updatedAt_ASC\n  updatedAt_DESC\n}\n\ntype UserPreviousValues {\n  id: ID!\n  email: String\n  name: String!\n}\n\ntype UserSubscriptionPayload {\n  mutation: MutationType!\n  node: User\n  updatedFields: [String!]\n  previousValues: UserPreviousValues\n}\n\ninput UserSubscriptionWhereInput {\n  mutation_in: [MutationType!]\n  updatedFields_contains: String\n  updatedFields_contains_every: [String!]\n  updatedFields_contains_some: [String!]\n  node: UserWhereInput\n  AND: [UserSubscriptionWhereInput!]\n  OR: [UserSubscriptionWhereInput!]\n  NOT: [UserSubscriptionWhereInput!]\n}\n\ninput UserUpdateInput {\n  email: String\n  name: String\n  posts: PostUpdateManyWithoutAuthorInput\n}\n\ninput UserUpdateManyMutationInput {\n  email: String\n  name: String\n}\n\ninput UserUpdateOneWithoutPostsInput {\n  create: UserCreateWithoutPostsInput\n  update: UserUpdateWithoutPostsDataInput\n  upsert: UserUpsertWithoutPostsInput\n  delete: Boolean\n  disconnect: Boolean\n  connect: UserWhereUniqueInput\n}\n\ninput UserUpdateWithoutPostsDataInput {\n  email: String\n  name: String\n}\n\ninput UserUpsertWithoutPostsInput {\n  update: UserUpdateWithoutPostsDataInput!\n  create: UserCreateWithoutPostsInput!\n}\n\ninput UserWhereInput {\n  id: ID\n  id_not: ID\n  id_in: [ID!]\n  id_not_in: [ID!]\n  id_lt: ID\n  id_lte: ID\n  id_gt: ID\n  id_gte: ID\n  id_contains: ID\n  id_not_contains: ID\n  id_starts_with: ID\n  id_not_starts_with: ID\n  id_ends_with: ID\n  id_not_ends_with: ID\n  email: String\n  email_not: String\n  email_in: [String!]\n  email_not_in: [String!]\n  email_lt: String\n  email_lte: String\n  email_gt: String\n  email_gte: String\n  email_contains: String\n  email_not_contains: String\n  email_starts_with: String\n  email_not_starts_with: String\n  email_ends_with: String\n  email_not_ends_with: String\n  name: String\n  name_not: String\n  name_in: [String!]\n  name_not_in: [String!]\n  name_lt: String\n  name_lte: String\n  name_gt: String\n  name_gte: String\n  name_contains: String\n  name_not_contains: String\n  name_starts_with: String\n  name_not_starts_with: String\n  name_ends_with: String\n  name_not_ends_with: String\n  posts_every: PostWhereInput\n  posts_some: PostWhereInput\n  posts_none: PostWhereInput\n  AND: [UserWhereInput!]\n  OR: [UserWhereInput!]\n  NOT: [UserWhereInput!]\n}\n\ninput UserWhereUniqueInput {\n  id: ID\n  email: String\n}\n";
