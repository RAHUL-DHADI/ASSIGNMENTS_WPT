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


let itemno=2;
let itemname='steering';
let price=15000;
let category='dash';

con.query('insert into item values(?,?,?,?)',[itemno,itemname,price,category],(err,res1)=>{

    if(err){ console.log(err)}
    else {
       console.log(res1.affectedRows);
      
    }


})


/*con.query('update item set price=?,category=? where itemno=?;',[20000,'transmission',2],(err,res1)=>{

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


/* let itemno=1;

con.query('select category from item where itemno=?',[itemno],(err,rows)=>{

    if(err){ console.log(err)}
    else {
        if(rows.length>0){
          console.log(rows[0].category);
        }
      
    }


}) */



/* let category='transmission';

con.query('select itemname from item where category=?',[category],(err,rows)=>{

    if(err){ console.log(err)}
    else {
        if(rows.length>0){
            for(let i=0;i<rows.length;i++){
          console.log(rows[i].itemname);
            }
        }
      
    }


})*/
