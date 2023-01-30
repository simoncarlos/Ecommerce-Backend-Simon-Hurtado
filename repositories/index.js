import { productDao } from "../containers/daos/product/index.js";
import { cartDao } from "../containers/daos/cart/index.js";
import { userDao } from "../containers/daos/user/index.js";
import { ProductList } from "./repositoryProducts.js";

export const productList = new ProductList(productDao);