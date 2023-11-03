// Crea una interface BaseObject con una propiedad id. Luego crea interfaces User, Product y Order que hereden de
// BaseObject. Crea una función genérica que pueda imprimir los datos.

interface BaseObject{
    id: number;
}
interface User extends BaseObject{
    name: string;
    email: string;
}
interface Product extends BaseObject{
    name: string;
    price: number;
}
interface Order extends BaseObject{
    userId: string;
    productId: string;
    quantity: number;
}
function printData<T extends BaseObject>(data: T): void {
    console.log(`Id: ${data.id}`);
  }
  
  // Ejemplo de uso
  const User = {
    id: '1234567890',
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
  };
  
  const Product = {
    id: '9876543210',
    name: 'iPhone 13 Pro',
    price: 1000,
  };
  
  const Order = {
    id: '1234567891',
    userId: User.id,
    productId: Product.id,
    quantity: 1,
  };
  
