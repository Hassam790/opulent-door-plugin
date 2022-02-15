import SimpleSchema from "simpl-schema";

export default function myStartup(context) {
  console.log("start of startup function");

  // const Dimesion = new SimpleSchema({
  //   unit: {
  //     type: String,
  //   },
  //   value: {
  //     type: String,
  //   },
  // });

  const ProductSize = new SimpleSchema({
    height: Number,
    length: Number,
    width: Number,
  });

  context.simpleSchemas.Product.extend({
    availableSizes: {
      type: Array,
      label: "availableSizes",
      optional: true,
    },
    "availableSizes.$": {
      type: ProductSize,
    },
  });
}
