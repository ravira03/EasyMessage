const {MongoClient} = require('mongodb');
require('dotenv').config();

/**
 * Main method connect to mongodb cluster
 **/

async function main(){
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri);
    try{
        await client.connect();
        await listDatabases(client);
    }catch(e){
        console.log(e);
    }
    finally{
        await client.close();
    }
}

main().catch(console.error);

/** 
 * Print the name of all avilable databases
 * @param {MongoClient} client A MongoClient that is connected to a cluster
**/
async function listDatabases(client){
    databaseList = await client.db().admin().listDatabases();

    console.log("Database:");
    databaseList.databases.forEach(db => console.log(`- ${db.name}`));
};