import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const GroupType = new GraphQLObjectType({
  name: "Group",
  description: "Group Type Definition",
  fields: () => ({
    id: { type: GraphQLID },
    description: { type: GraphQLString },

  }),
});
