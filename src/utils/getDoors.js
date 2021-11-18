/**
 *
 * @method getUnitDoors
 * @summary Get all of a Unit's Variants or only a Unit's top level Variants.
 * @param {Object} context - an object containing the per-request state
 * @param {String} unitOrVariantId - A Unit or top level Unit Variant ID.
 * @param {Boolean} topOnly - True to return only a units top level variants.
 * @param {Object} args - an object of all arguments that were sent by the client
 * @param {Boolean} args.shouldIncludeHidden - Include hidden units in results
 * @param {Boolean} args.shouldIncludeArchived - Include archived units in results
 * @returns {Promise<Object[]>} Array of Unit Variant objects.
 */
export default async function getDoors(context, size) {
  const { collections } = context;
  const { Products } = collections;

  console.log("Inside Function");

  console.log("size", size);

  size = size[0];

  const selector = {
    productType: "door",
    length: parseFloat(size.length),
    width: parseFloat(size.width),
    height: parseFloat(size.height),
  };
  console.log(`selector`, selector);

  let result = await Products.find(selector).toArray();

  console.log(`result`, result);

  return result;
}
