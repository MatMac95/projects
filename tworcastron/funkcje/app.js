// function test() {
//   console.log(window === this);
// }

// test();

const cart = {
  price: 12,
  showPrice: function () {
    console.log(this);
  },
};
cart.showPrice();
