import * as authService from "../services/authService.js";
import asyncHandler from "../utils/asyncWrapper.js";

export const register = asyncHandler(async (req,res) => {
    const data = await authService.register(req.body);
    res.status(201).json({
        success:true,
        data,
        message: "Utilisateur créé avec succès"
    });
});