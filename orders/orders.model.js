const orders = {
  date: "2005-05-09",
  subtotal: 90.22,
  items: [
    {
      product: {
        id: "readshoe",
        description: "Old read shoe",
        price: 45.11,
      },
      quantity: 2,
    },
  ],
};

function getAllOrders() {
  return orders;
}

module.exports = {
  getAllOrders,
};
