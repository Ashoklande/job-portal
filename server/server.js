import express from 'express';
import cors from 'cors'
import 'dotenv/config'
import ConnectToDb from './config/db.js';
import { clerkWebhooks } from './controllers/Webhooks.js';

// Initialize express
const app=express();

//connect to databse
 await ConnectToDb();

//setup cors
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('ApI Working');
})

app.post('/webhook',clerkWebhooks);

const PORT=process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`server start on port ${PORT}`);
    
});