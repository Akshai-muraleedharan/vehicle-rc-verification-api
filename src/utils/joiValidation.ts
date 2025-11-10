import Joi from "joi";
import { VehicleNumber } from "../interface/interface";



export const vehicleRcVerification = Joi.object<VehicleNumber>({
    vehicleNumber: Joi.string().required().pattern(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{4}$/).messages({
        "string.pattern.base": "Enter a valid vehicle number (e.g., 'KL06AB1234').",
        "string.empty": "Vehicle number is required.",
    })
})