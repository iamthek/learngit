const  Koa=require('koa');
var fs = require("fs")
const  KoaStatic=require('koa-static');
const logger = require('koa-logger')
const stripAnsi = require('strip-ansi');
const  app=new Koa();
app.use(logger((str,args)=>{
    
    fs.writeFile('log.txt',stripAnsi(str)+'\n',{flag:'a'},function(err){
        if (err) {
            return console.error(err);
        }
    })
}))
app.use(KoaStatic('src'));
//set cors
app.use(async(ctx,next)=>{
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    ctx.set('Access-Control-Allow-Methods','GET,HEAD,POST,PUT,DELETE,OPTIONS');
    ctx.set('Access-Control-Allow-Credentials','false');
  
    next();
  });
  
  
  app.listen(8086);
  console.log('server is running at 8086 port');