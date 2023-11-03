// Crea una interface User y otra interfaz Admin que herede de User. Crea una función para imprimir datos de
// usuario que acepte tanto User como Admin.


interface User {
    name: string;
    email: string;
  }
  

  interface Admin extends User {
    adminKey: string;
  }
  
  
  function printUser(user: User | Admin) {
    console.log(`Nombre: ${user.name}`);
    console.log(`Correo electrónico: ${user.email}`);
  }
  
 
  const user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
  };
  
  const admin = {
    name: 'María García',
    email: 'maria.garcia@example.com',
    adminKey: '1234567890',
  };
  

  