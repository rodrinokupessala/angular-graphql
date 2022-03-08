import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  graphqlSync,
} from "graphql";
import { Groups } from "../../Entities/Groups";
import { hashPassword, comparePassword } from "../../libs/bcrypt";
import { MessageType } from "../TypeDefs/Message";
import { GroupType } from "../TypeDefs/Group";

export const CREATE_GROUP = {
  type: GroupType,
  args: {
    description: { type: GraphQLString },

  },
  async resolve(parent: any, args: any) {
    const { description } = args;



    const result = await Groups.insert({
    description
    });

    return { ...args, id: result.identifiers[0].id, description:description };
  },
};

export const DELETE_GROUP = {
  type: GraphQLBoolean,
  args: {
    id: { type: GraphQLID },
  },
  async resolve(_: any, { id }: any) {
    const result = await Groups.delete(id);
    if (result.affected! > 0) return true;
    return false;
  },
};

export const UPDATE_GROUP = {
  type: MessageType,
  args: {
    id: { type: GraphQLID },
    input: {
      type: new GraphQLInputObjectType({
        name: "GroupInput",
        fields: () => ({
          description: { type: GraphQLString },

        }),
      }),
    },
  },
  async resolve(_: any, { id, input }: any) {
    const GroupFound = await Groups.findOne(id);





    const response = await Groups.update(
      { id },
      { description: input.description }
    );

    if (response.affected === 0) return;

    return {
      success: true,
      message: "Update Group successfully",
    };
  },
};
