// const mysql = require('nodejs-mysql').default;


// const config = {
//     host : "localhost",
//     user : "root",
//     password : "root",
//     database : "employee_db"
// }


// const db = mysql.getInstance(config);


// db.connect()
//   .then(function(){
//     console.log("Connected!!");


//     var sql = "INSERT INTO employee (username, password, firstname, lastname, email) VALUES ('abc', 'xx', 'abc1', 'a', 'a46884@gmail.com')";
   
//     return db.exec(sql);
 
// }).then(function(res){
//     console.log(res);
//     return db.exec("SELECT * FROM employee");
// }).then(function(result){
//     for( var i in result){
//         console.log("Username: ", result[i].username + " " + "Password: " + result[i].password);
//         process.exit(0);
//     }
// }).catch(function(err){
//     console.log("ERROR: ", err);
//     process.exit(0);
// });

const mysql = require('mysql2');


const connection = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'root', 
  database: 'nodetest', 
});


function connectToDatabase() {
  return new Promise((resolve, reject) => {
    connection.connect((err) => {
      if (err) reject(err);
      else resolve('Connected to MySQL database');
    });
  });
}


function insertRecord() {
  return new Promise((resolve, reject) => {
    const employee = {
      name: 'xyz',
      department: 'IT',
      salary: 50000,
    };

    connection.query('INSERT INTO employee SET ?', employee, (err, result) => {
      if (err) reject(err);
      else resolve('Record inserted successfully');
    });
  });
}


function displayAllRecords() {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM employee', (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
}


async function main() {
  try {
    console.log(await connectToDatabase());
    console.log(await insertRecord());
    const allRecords = await displayAllRecords();
    console.log('All Records in the employee table:');
    console.log(allRecords);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    connection.end();
  }
}


main();