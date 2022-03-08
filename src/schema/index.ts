import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { GREETING } from "./Queries/Greeting";
import { GET_ALL_USERS, GET_USER } from "./Queries/User";
import { CREATE_USER, DELETE_USER, UPDATE_USER } from "./Mutations/User";

import { GET_ALL_GROUPS, GET_GROUP} from "./Queries/Group";
import { CREATE_GROUP, DELETE_GROUP, UPDATE_GROUP } from "./Mutations/Group";

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    greeting: GREETING,
    getAllUsers: GET_ALL_USERS,
    getUser: GET_USER,
    getAllGroups: GET_ALL_GROUPS,
    getGroup: GET_GROUP,
  },
});

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
    deleteUser: DELETE_USER,
    updateUser: UPDATE_USER,
    createGroup: CREATE_GROUP,
    deleteGroup: DELETE_GROUP,
    updateGroup: UPDATE_GROUP,
  },
});

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
