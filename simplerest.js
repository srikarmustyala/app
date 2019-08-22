var express=require('express');
var bodyParser=require('body-parser');
var cors=require('cors');
var instance=express();

var products=[
    {ProductId:100,ProductName:'p1',CategoryName:'electronics',Manufacturer:'Hp',Price:1000},
    {ProductId:101,ProductName:'p3',CategoryName:'electronics',Manufacturer:'Hp',Price:2000},
    {ProductId:102,ProductName:'p2',CategoryName:'electronics',Manufacturer:'Hp',Price:1500},
    {ProductId:103,ProductName:'p4',CategoryName:'electronics',Manufacturer:'Hp',Price:1050},
];

instance.use(bodyParser.json());
instance.use(bodyParser.urlencoded({extended:false}));
//cors middleware=>all origins,all headers,all methods
instance.use(cors());
instance.get('/api/products',function(request,response){var authValues=request.headers.authorization;
    var receivedValues=authValues.split(' ');
    var credentials=receivedValues[1].split(':');
    if(credentials[0]=="srikar" && credentials[1]=="srikar"){
        response.send(JSON.stringify(products));
    }else{
        response.sendStatus(401);
    }

});


instance.post('/api/products',function(request,response){
    console.log(request.body);
    var prd={
        ProductId:request.body.ProductId,
        ProductName:request.body.ProductName,
        CategoryName:request.body.CategoryName,
        Manufacturer:request.body.Manufacturer,
        Price:request.body.Price,
    };
    console.log('received data:'+JSON.stringify(prd));
    products.push(prd);
    response.send(JSON.stringify(products));
});
instance.delete('/api/products/:id',function(request,response){
    var d=request.params.id;

        for(let i = 0; i < products.length;i++){
            if (products[i].ProductId == d) {
                products.splice(i,1);
                break;
            }
        }
        response.send(JSON.stringify(products));
});
instance.listen(9009,function(){
    console.log('server started on port 9009');
})