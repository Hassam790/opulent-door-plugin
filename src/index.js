import pkg from "../package.json";
import importAsString from "@reactioncommerce/api-utils/importAsString.js";
import myStartup from "./startup.js";
import getDoors from "./utils/getDoors.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {ReactionAPI} app The ReactionAPI instance
 * @returns {undefined}
 */

const mySchema = importAsString("./schemas/schema.graphql");

const resolvers = {
  Product: {
    async unit(parent, args, context, info) {
      let units = await getDoors(context, parent.fitSize);
      console.log(`units`, units);
      return units;
    },

    async door(parent, args, context, info) {
      // console.log("Fetiching Door");
      // console.log(`parent`, parent);
      // let doors = await getDoors(context, parent.fitSize);
      console.log(`doors`, doors);
      return doors;
    },
  },
};

export default async function register(app) {
  await app.registerPlugin({
    label: "Opulent Plugin",
    name: "plugin-opulent",
    version: pkg.version,
    functionsByType: {
      startup: [myStartup],
    },
    graphQL: {
      schemas: [mySchema],
      resolvers,
    },
  });
}

// function myPublishProductToCatalog(
//   catalogProduct,
//   { context, product, shop, variants }
// ) {
//   // catalogProduct.variants &&
//   // catalogProduct.variants.map((catalogVariant) => {
//   //   const productVariant = variants.find(
//   //     (variant) => variant._id === catalogVariant.variantId
//   //   );
//   //   // catalogVariant = productVariant || null;
//   // });
// }
