import { Product } from "./model/product.model"
import { Category } from "./model/category.model"
import { Cart } from "./model/cart.model"
import { User } from "./model/user.model"
import { role } from "./model/user.model"

const cart = new Cart()
const book1 = new Product(1, "Por que não pediram a Evans?", 10, 10, "https://m.media-amazon.com/images/I/81mVEYWYnhL._SL1500_.jpg", new Category(1, "Romance policial"));
const book2 = new Product(2, "Hora Zero", 10, 10, "https://m.media-amazon.com/images/I/81mVEYWYnhL._SL1500_.jpg", new Category(2, "Romance policial"));
const user1 = new User(1, "leticiag", "leticia@gmail.com", role.ADMIN )


cart.addProduct(book1, 1)
cart.addProduct(book2, 2)

console.log("Valor final livro 1: " + book1.discountApplied())
console.log("Valor final livro 2: " + book2.discountApplied())

console.log("Carrinho: ")
console.log(cart)
console.log("Valor total: R$" + cart.getFinalPrice())
console.log("Total de itens: " + cart.getTotalItems())

console.log("User: ", user1)