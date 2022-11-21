import { DataSource } from 'typeorm';
import configs from '../../config/mysql';
import entities from './entities';

const env = process.env.NODE_ENV || 'development';
// @ts-ignore
export const dataSource = new DataSource({ ...configs[env], entities });

export function connectMysql() {
  dataSource
    .initialize()
    .then(() => console.log('mysql connecting...'))
    .catch((err) => console.log(err));
}
