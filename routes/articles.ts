import Router, {RouterContext} from "koa-router";
import bodyparser from "koa-bodyparser"
const articles = [
  {title: 'Hello article', fullText:'some text to fill the body'},
  {title: 'another article', fullText:'another text to fill the body'},
  {title: 'dllm article', fullText:'dllm'},
  {title: 'smart campus', fullText:'smart campus'}
];
  
const router = new Router({prefix:'/api/v1/articles'});

const getAll = async (ctx: RouterContext, next:any) => {
  ctx.body = articles;
  await next();
}

const createArticle = async (ctx: RouterContext, next:any) => {
  let c: any = ctx.request.body;
  let title =c.title;
  let fullText = c.fullText;
  let newArticle = {title:title, fullText: fullText};
  articles.push(newArticle);
  ctx.status = 201;
  ctx.body = newArticle;
  await next();
}

const getById = async (ctx: RouterContext, next:any) => {
  let id = +ctx.params.id;
  if((id < articles.length +1) && (id>0)) {
    ctx.body = articles[id-1];
  }else {
    ctx.status = 404;
  }
  await next();
}

const updateArticle = async (ctx: RouterContext, next:any) => {
  await next();
}

const deleteArticle = async (ctx: RouterContext, next:any) => {
  await next();
}

router.get('/', getAll);
router.post('/', bodyparser(), createArticle);
router.get('/:id([0-9]{1,})', getById);
router.put('/:id([0-9]{1,})', updateArticle);
router.delete('/:id([0-9]{1,})', deleteArticle);

export { router }; //point to index
