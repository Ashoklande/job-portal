import { Webhook } from "svix";

import User from "../models/user.js";

export const clerkWebhooks=async(req,res)=>{
    try{
            const whook=new Webhook(process.env.CLERK_WEBHOOK_SECRET)
            
            await whook.verify(JSON.stringify(req.body),{
                'svix-id':req.headers["svix-id"],
                'svix-timestamp':req.headers["svix-timestamp"],
                'svix-signature':req.headers["svix-signature"],
            })
              
                const {data,type}=req.body;

                switch (type) {
                    case 'user.created':{
                        const userdata={
                            _id:data.id,
                            email:data.email_addresses[0].email_address,
                            name:data.first_name+" "+data.last_name,
                            image:data.image_url,
                            resume:'',

                        }

                        await User.create(userdata);
                        res.json({});
                        break;
                    }
                    case 'user.updated':{
                        const userdata={
                            email:data.email_addresses[0].email_address,
                            name:data.first_name+" "+data.last_name,
                            image:data.image_url,

                        }
                        await User.findOneAndUpdate(data.id,userdata);
                        res.json({});
                        break;
                    }
                    case 'user.deleted':{
                        await User.findOneAndDelete(data.id);
                        res.json({});
                        break;

                    }

                    default:
                        break;
                }

    }catch(err){
        console.log(err.Message);
        res.json({success:false,messgae:'webhook error'});
        
    }
}