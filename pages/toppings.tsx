import Link from 'next/link';
import usePizzaStore from '../utils/store/pizza-store';


const Toppings = () => {
  const [addToppings, pizza] = usePizzaStore((state) => [state.addToppings, state.pizza])

  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <div className="toppings container">

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <li key={topping} onClick={() => addToppings(topping)}>
              <span className={spanClass}>{topping}</span>
            </li>
          )
        })}
      </ul>

      <Link href="/order">
        <button>
          Order
        </button>
      </Link>

    </div>
  )
}

export default Toppings;