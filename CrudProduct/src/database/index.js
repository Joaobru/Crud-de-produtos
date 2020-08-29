import Sequelize from "sequelize";
import databaseConfig from "../config/database";
import Products from "../app/models/Products";

const models = [Products];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}
export default new Database();
