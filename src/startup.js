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
    fitSize: {
      type: Array,
      label: "fitSize",
      optional: true,
    },
    "fitSize.$": {
      type: ProductSize,
    },
  });
}
