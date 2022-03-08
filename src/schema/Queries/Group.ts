import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { Groups } from "../../Entities/Groups";
import { GroupType } from "../TypeDefs/Group";

export const GET_ALL_GROUPS = {
  type: new GraphQLList(GroupType),
  resolve() {
    return Groups.find();
  },
};

export const GET_GROUP = {
  type: GroupType,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, args: any) {
    const result = await Groups.findOne(args.id);
    return result;
  },
};
