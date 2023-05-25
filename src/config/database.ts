import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('empresa', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;