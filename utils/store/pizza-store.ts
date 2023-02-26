import { create } from 'zustand';
import { Pizza, PizzaDto } from './types';


const usePizzaStore = create<PizzaDto>(
  (set, get) => ({
    pizza: {
      base: '',
      toppings: []
    },
    addBase: (base: string) => set((state) => ({ pizza: { ...state.pizza, base: base } })),
    addToppings: (toppings: string) => {
      let newToppings: string[];
      const pizza = get().pizza;
      if (!pizza.toppings.includes(toppings)) {
        newToppings = [...pizza.toppings, toppings]
      } else {
        newToppings = pizza.toppings.filter(item => item !== toppings)
      }
      set((state) => ({ pizza: { ...state.pizza, toppings: newToppings } }))
    }
  })
)

export default usePizzaStore;