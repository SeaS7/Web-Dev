const dishData = [
    { name: 'Spaghetti', price: 10 },
    { name: 'Pizza', price: 12 },
    { name: 'Salad', price: 8 },
  ];
  function getPrices(taxBoolean) {
    for (const dish of dishData) {
      let finalPrice;
      if (taxBoolean === true) {
        finalPrice = dish.price * 1.1; // Assuming tax is 10%
      } else if (taxBoolean === false) {
        finalPrice = dish.price;
      } else {
        console.log("You need to pass a boolean to the getPrices call!");
        return;
      }
      console.log("Dish: ", dish.name, "Price: $", finalPrice);
    }
  }

  function getDiscount(taxBoolean, guests) {
    getPrices(taxBoolean);
    if (typeof guests === 'number' && guests > 0 && guests < 30) {
      let discount = 0;
      if (guests < 5) {
        discount = 5;
      } else if (guests >= 5) {
        discount = 10;
      }
      console.log('Discount is: $' + discount);
    } else {
      console.log('The second argument must be a number between 0 and 30');
    }
  }

  getDiscount(true, 2);
  getDiscount(false, 10);
  getDiscount();
  getDiscount(true, 'invalid');
  getDiscount(true, 35);