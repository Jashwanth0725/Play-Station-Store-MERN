export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const discount = (basket) => getBasketTotal(basket) / 10;

export const totalPrice = (basket) => getBasketTotal(basket) - discount(basket);

const reducer = (state, action) => {
  // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      const productIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      let updatedBasket = [...state.basket];

      if (productIndex >= 0) {
        // Update the quantity if the item exists
        updatedBasket[productIndex] = {
          ...updatedBasket[productIndex],
          quantity: updatedBasket[productIndex].quantity + action.item.quantity,
        };
      } else {
        // Add the item if it doesn't exist
        updatedBasket.push(action.item);
      }

      return {
        ...state,
        basket: updatedBasket,
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "INCREASE_QUANTITY":
      const indexQuantity = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasketIncrease = [...state.basket];
      if (indexQuantity >= 0) {
        console.log(newBasketIncrease[indexQuantity].quantity);
        newBasketIncrease[indexQuantity] = {
          ...newBasketIncrease[indexQuantity],
          quantity: newBasketIncrease[indexQuantity].quantity + 1,
        };
        console.log(newBasketIncrease[indexQuantity].quantity);
      } else {
        console.warn(
          `Can't update quantity of product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasketIncrease,
      };

    case "DECREASE_QUANTITY":
      const indexDecreaseQuantity = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasketDecrease = [...state.basket];
      if (indexDecreaseQuantity >= 0) {
        newBasketDecrease[indexDecreaseQuantity] = {
          ...newBasketDecrease[indexDecreaseQuantity],
          quantity: newBasketDecrease[indexDecreaseQuantity].quantity - 1,
        };
      } else {
        console.warn(
          `Can't update quantity of product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasketDecrease,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
