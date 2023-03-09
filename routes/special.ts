import Router, { RouterContext } from "koa-router";
import { basicAuth }from "../controllers/auth";

const router = new Router({prefix: 'api/v1'});

// just for testing
  router.get('/', async(ctx: RouterContext, next: any) => {
    ctx.body = {
      message: 'Punlic API return'
    };
    await next();
  })

// add a protected router that requires authentication
router.get("/private", basicAuth);

export {router};