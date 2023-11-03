// Crea una interface Database con funciones como connect, find, update, etc. Luego crea una clase
// MySQLDatabase e SQLiteDatabase que implementen esa interface con distintas funcionalidades

// Interface Database
interface Database {
  connect(): void;
  find(query: string): any[];
  update(query: string): void;
}

// Clase MySQLDatabase
class MySQLDatabase implements Database {
  private connection: any;

  constructor(host: string, port: number, database: string, username: string, password: string) {
    this.connection = new Connection({
      host,
      port,
      database,
      username,
      password,
    });
  }

  public connect(): void {
    this.connection.connect();
  }

  public find(query: string): any[] {
    return this.connection.query(query);
  }

  public update(query: string): void {
    this.connection.query(query);
  }
}

// Clase SQLiteDatabase
class SQLiteDatabase implements Database {
  private db: any;

  constructor(path: string) {
    this.db = new Database(path);
  }

  public connect(): void {
    this.db.open();
  }

  public find(query: string): any[] {
    return this.db.query(query);
  }

  public update(query: string): void {
    this.db.query(query);
  }
}

// Ejemplo de uso
const mysqlDatabase = new MySQLDatabase('localhost', 3306, 'my_database', 'user', 'password');
mysqlDatabase.connect();

const results = mysqlDatabase.find('SELECT * FROM users');
console.log(results);

mysqlDatabase.update('UPDATE users SET name = "Juan Pérez" WHERE id = 1');

const sqliteDatabase = new SQLiteDatabase('./database.db');
sqliteDatabase.connect();

const results = sqliteDatabase.find('SELECT * FROM users');
console.log(results);

sqliteDatabase.update('UPDATE users SET name = "María García" WHERE id = 2');
