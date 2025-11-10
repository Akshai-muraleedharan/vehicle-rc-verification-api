"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getVehicleRcData = void 0;
const joiValidation_1 = require("../utils/joiValidation");
const axios_1 = __importDefault(require("axios"));
const getVehicleRcData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f;
    try {
        const { error, value } = joiValidation_1.vehicleRcVerification.validate(req.body);
        if (error) {
            res.status(400).json({ success: false, message: error.details[0].message });
            return;
        }
        const vehicleNumberUpperCase = (_a = value.vehicleNumber) === null || _a === void 0 ? void 0 : _a.toUpperCase().trim();
        const data = JSON.stringify({
            "vehicleNumber": vehicleNumberUpperCase
        });
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: process.env.INVINCIBLE_OCEAN_BASE_URL,
            headers: {
                'Content-Type': 'application/json',
                'clientId': `${process.env.INVINCIBLE_CLIENT_ID}`,
                'secretKey': `${process.env.INVINCIBLE_SECRET_ID}`
            },
            data: data
        };
        ;
        const axiosResponse = yield (0, axios_1.default)(config);
        res.status(200).json({ success: true, message: "Data fetched successfully", data: axiosResponse === null || axiosResponse === void 0 ? void 0 : axiosResponse.data });
    }
    catch (error) {
        res.status(((_c = (_b = error === null || error === void 0 ? void 0 : error.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.message.code) || 500).json({ success: false, message: ((_e = (_d = error === null || error === void 0 ? void 0 : error.response) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.message) || "Internal server error", data: ((_f = error === null || error === void 0 ? void 0 : error.response) === null || _f === void 0 ? void 0 : _f.data) || null });
        return;
    }
});
exports.getVehicleRcData = getVehicleRcData;
