import * as Sequelize from "sequelize";
import { ModelsInterfaces } from "./ModelsInterface";

export interface DbConnection extends ModelsInterfaces {
  sequelize: Sequelize.Sequelize;
}
