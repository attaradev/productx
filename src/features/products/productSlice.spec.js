import productsReducer, {
  addProduct,
  deleteProduct,
  editProduct,
} from "./productsSlice";

describe("products reducer", () => {
  const initialState = {
    value: {
      products: [],
      dates: {},
    },
    status: "idle",
  };
  it("should handle initial state", () => {
    expect(productsReducer(undefined, { type: "unknown" })).toEqual({
      value: {
        products: [],
        dates: {},
      },
      status: "idle",
    });
  });

  it("should add product", () => {
    const actual = productsReducer(initialState, addProduct());
    expect(actual.value).toEqual(4);
  });

  it("should edit product", () => {
    const actual = productsReducer(initialState, editProduct());
    expect(actual.value).toEqual(2);
  });

  it("should delete product", () => {
    const actual = productsReducer(initialState, deleteProduct());
    expect(actual.value).toEqual(5);
  });
});
