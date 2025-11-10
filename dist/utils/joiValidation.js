"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vehicleRcVerification = void 0;
const joi_1 = __importDefault(require("joi"));
exports.vehicleRcVerification = joi_1.default.object({
    vehicleNumber: joi_1.default.string().required().pattern(/^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{4}$/).messages({
        "string.pattern.base": "Enter a valid vehicle number (e.g., 'KL06AB1234').",
        "string.empty": "Vehicle number is required.",
    })
});
