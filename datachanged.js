var fs = require('fs');

function changeJson(newhost, newcookie){
    fs.readFile('./AA.json',function(err,data){
        if(err){
            console.error(err);
        }
        var json = data.toString();
        console.log(json)
        json = JSON.parse(json);
   

        //对host以及cookie进行控制台现实以及修改操作；
        console.log(json.nodes[1].uri.host);
        json.nodes[1].uri.host=newhost;
        console.log(json.nodes[1].uri.host);

        console.log(json.nodes[1].headers[7].value);
        json.nodes[1].headers[7].value=newcookie;
        console.log(json.nodes[1].headers[7].value);


        getcookies = json.nodes[1].headers[7].value;
        console.log("最终得到的cookies的值是"+getcookies);

        //对四个不需要的数据进行删除操作；
        for(let i=10;i>-1;i--){
            if(i == 0 || i==6 || i==8|| i==9){

                 json.nodes[1].headers.splice(i,1);
                 console.log("删除第"+i+"个");

            }
        } 
        

        json.total = json.nodes.length;
        var str = JSON.stringify(json);
        // console.log(str);
        fs.writeFile('./new/package.json',str,function(err){
            if(err){
                console.error(err);
            }
            console.log('--------------修改成功---------------');
            console.log(json);
        })
        return getcookies;
    })
}
changeJson('www.baidu.com','asdjasfjsahfkshjdhfjsad' );//执行一下;




