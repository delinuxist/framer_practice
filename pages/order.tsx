import usePizzaStore from '../utils/store/pizza-store';

const Order = () => {
  const pizza = usePizzaStore((state) => state.pizza)
  return (
    <div className="container order">
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </div>
  )
}

export default Order;