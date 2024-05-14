import Router from '@koa/router';
import {healthcheck} from "./api/healthcheck.js";
import {routeToFunction} from "./middlewares.js";
import {getCustomersByCursorPagination, getCustomersByOffsetPagination} from "./controllers/customer.js";

const router = new Router();

router.get('/healthcheck', routeToFunction(healthcheck));
router.get('/customer/offset', routeToFunction(getCustomersByOffsetPagination));
router.get('/customer/cursor', routeToFunction(getCustomersByCursorPagination));

export default router;