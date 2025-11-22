import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import convert from "../utils/convertEnv.js";
/**
 * Model User 
 * username( string, obligatoire, min 3 caratères, max 30, pas d'espaces)
 * email(string, obligatoire, unique, miniscules, pas d'espaces)
 * password(string, obligatoire,min 6)
 * emailVerifie(booléen)
 * emailCode()
 * emailCodeExpire(date)
 * timestamps
 */

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        unique:true,
        minlength:3,
        maxlength:10,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        select:false
    },
    emailVerified:{
        type:Boolean,
        default:false
    },
    emailVerificationCode:{
        type:Number
    },
    emailCodeExpireAt:{
        type:Date
    },
    emailVerifiedAt:{
        type:Date
    }
},{
    timestamps:true,
    strict:"throw"
});


userSchema.pre('save', async function (next){
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(convert(process.env.HASH_ROUNDS));
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

export const User = mongoose.model('User',userSchema);