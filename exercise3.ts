// Crea una interface Product con name, price, etc. Crea una interface Inventory que contenga un array de Product
// y funciones para agregar y buscar productos.

interface Product{
    name: string;
    price: number
}
interface Inventory{
    products: Product[]
    addProduct(product: Product): void;
  findProduct(name: string): Product | undefined;
}

class Inventory implements Inventory {
    public products: Product[] = [];
  
    public addProduct(product: Product): void {
      this.products.push(product);
    }
  
    public findProduct(name: string): Product | undefined {
      return this.products.find((product) => product.name === name);
    }
  }
