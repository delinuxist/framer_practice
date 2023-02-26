
export interface PizzaDto {
  pizza: Pizza
  addBase: (base: string) => void
  addToppings: (topping: string) => void
}

export interface Pizza {
  base: string
  toppings: string[]
}