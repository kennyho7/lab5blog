import Router, {RouterContext} from "Koa-router";

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
  await next();
}

const getById = async (ctx: RouterContext, next:any) => {
  await next();
}

const updateArticle = async (ctx: RouterContext, next:any) => {
  await next();
}

const deleteArticle = async (ctx: RouterContext, next:any) => {
  await next();
}

router.get('/', getAll);
router.post('/', createArticle);
router.get('/:id', getById);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

export { router }; //point to index
