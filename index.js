import ProductManager from "./product/productManager.js";

const manager = new ProductManager();

const env = async () => {
  let product = {
    title: "nombre",
    description: "primer producto",
    price: 100,
    thumbnail: "imagen",
    code: "abc123457",
    stock: 3,
  };

  let result = await manager.addProduct(product);
  console.log(result);

  let products = await manager.getProducts();
  console.log(products);

  await manager.updateProduct(1, {
    title: "Producto actualizado",
    description: "Producto nuevo actualizado",
    price: 300,
    stock: 10,
  });

  //console.log(products);

  // await manager.deleteProduct(2);
  /* console.log(await manager.getProductById()); */
};

env();