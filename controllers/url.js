
const URL = require('../models/url');
const Shortid = require("shortid");
// app.use(express.json());
// app.use(express.urlencoded({ extended: false}));
exports.post = async (req,res)=>{

const body = req.body;
if(!body.url) 
{return res.this.status(400).json({msg: 'Url is required'})
};
const ShortID = Shortid(8); 

await URL.create({
    Short_Id: ShortID,
    redirect_Url:body.url,
    VisitHistory:[],


})
return res.json({id:ShortID });
}

