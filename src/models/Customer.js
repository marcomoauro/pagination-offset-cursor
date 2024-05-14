import log from '../log.js'
import {query} from '../database.js'

export default class Customer {
  id
  name
  age
  city

  constructor(properties) {
    Object.keys(this)
      .filter((k) => typeof this[k] !== 'function')
      .map((k) => (this[k] = properties[k]))
  }

  static fromDBRow = (row) => {
    const customer = new Customer({
      id: row.id,
      name: row.name,
      age: row.age,
      city: row.city,
    })

    return customer
  }

  static getByOffsetPagination = async ({limit, offset}) => {
    log.info('Model::Customer::getByOffsetPagination', {limit, offset})

    const rows = await query(`
        select *
        from customers
        order by id
        limit ?
        offset ?
    `, [limit, offset]);

    const customers = rows.map(Customer.fromDBRow)

    return customers
  }

  static getByCursorPagination = async ({limit, cursor}) => {
    log.info('Model::Customer::getByCursorPagination', {limit, cursor})

    const rows = await query(`
        select *
        from customers
        ${cursor ? `where id > ?` : ''}
        order by id
        limit ?
    `, [cursor, limit]);

    const customers = rows.map(Customer.fromDBRow)

    return customers
  }
}