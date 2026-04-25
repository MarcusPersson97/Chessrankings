import { MongoClient } from "mongodb";

const ConnectionString = process.env.CONNSTRING;
const client = new MongoClient(ConnectionString);
 
export async function RunDb(){

try {
    
    await client.connect();
    console.log('DB Connection established');   
    
        
} 

catch (error) {



    
}

finally{

    client.close();

}


}

