//uncomment the operations according to the requirements.............


const url="";


let dbparams={

    host:'localhost',
    user:'root',
    password:'cdac',
    database:'nodejs',
    port:3306


};





const mysql=require('mysql2');
const con=mysql.createConnection(dbparams);


console.log('entered the database');


//uncomment the operations according to the requirements.............


let resourceid=102;
let resourcename='rohit';
let status=true;


con.query('insert into resource values(?,?,?)',[resourceid,resourcename,status],(err,res1)=>{

    if(err){ console.log(err)}
    else {
       console.log(res1.affectedRows);
      
    }


});


/*con.query('update resource set resourcename=?,status=? where resourceid=?',['priyanka',false,101],(err,res1)=>{

    if(err){console.log(err)}
    else{

        if(res1.affectedRows>0){
            console.log('updated');
        }
        else{

            console.log('not updated');
        }
    }
}) */


/* let resourceid=101;

con.query('select resourcename from resource where resourceid=?',[resourceid],(err,rows)=>{

    if(err){ console.log(err)}
    else {
        if(rows.length>0){
          console.log(rows[0].resourcename);
        }
      
    }


}) */



 /*let status=true;

con.query('select resourcename from resource where status=?',[status],(err,rows)=>{

    if(err){ console.log(err)}
    else {
        if(rows.length>0){
            for(let i=0;i<rows.length;i++){
          console.log(rows[i].resourcename);
            }
        }
      
    }


})*/
