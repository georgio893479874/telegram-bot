class Keyboard {
  constructor() {}

  // gscript google script java script
  // table, word, power point

  basketProducts(listProducts) {
    console.log(listProducts);
    let inline_btns = [];
    for (let i = 0; i < listProducts.length; i++) {
      inline_btns.push([
        {
          text: `⬜️ ${listProducts[i].title} - ${listProducts[i].price} fUAH`,
          callback_data: `basketItem-${listProducts[i].id} `,
        },
      ]);
    }

    inline_btns.push([
      { text: "Оформити замовлення", callback_data: "completeOrder" },
    ]);
    inline_btns.push([{ text: "❌", callback_data: "deleteBasketItem" }]);

    return {
      reply_markup: {
        inline_keyboard: inline_btns,
      },
    };
  }

  keyboardNextProducts(myBasket) {
    return {
      reply_markup: {
        keyboard: [
          [{ text: "⬅️ prev" }, { text: "next ➡️" }],
          [
            {
              text: `🛒 basket (${myBasket.products.length} pts - ${myBasket.sum} UAH)`,
            },
          ],
          
        ],

        resize_keyboard: true,
      },
    };
  }

  keyboardViewProduct() {
    return {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Переглянути товар", callback_data: "view-product" }],
        ],
        resize_keyboard: true,
      },
    };
  }

  keyboardProduct(id) {
    return {
      reply_markup: {
        inline_keyboard: [
          [{ text: "Вліво", callback_data: "buy-" + id }],
          [{ text: "Купити", callback_data: "buy-" + id }],
          [{ text: "В обране", callback_data: "favorites-" + id }],
          [{ text: "Деталі", url: "https://google.com" }],
          [{ text: "Написати в чат", callback_data: "chat-" + id }],
        ],
        resize_keyboard: true,
      },
    };
  }
}

let keyboards = new Keyboard();

export { keyboards };
