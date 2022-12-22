const http=require('http')

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Welcome to My Home Page')
        res.end()
    }
   if(req.url==='/about'){
    res.end('Welcome to the About Page')
   }
   res.end('<h1>Oops!</h1>')
})
server.listen(5000)