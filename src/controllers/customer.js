import log from "../log.js";
import Customer from "../models/Customer.js";

export const getCustomersByOffsetPagination = async ({limit, offset}) => {
  limit = parseInt(limit);
  offset = parseInt(offset);

  log.info('Controller::customer::getCustomersByOffsetPagination', {limit, offset})

  const customers = await Customer.getByOffsetPagination({limit, offset})

  return customers;
}

export const getCustomersByCursorPagination = async ({limit, cursor}) => {
  limit = parseInt(limit);
  cursor = parseInt(cursor);

  log.info('Controller::customer::getCustomersByCursorPagination', {limit, cursor})

  const customers = await Customer.getByCursorPagination({limit, cursor})

  return {
    next_cursor: customers.at(-1)?.id ?? null,
    customers
  };
}