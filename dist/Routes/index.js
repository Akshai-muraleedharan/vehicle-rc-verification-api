"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const vehicleRcVerifyController_1 = require("../controller/vehicleRcVerifyController");
exports.router = express_1.default.Router();
/**
 * @swagger
 * /vehicle:
 *    post:
 *     summary: Vehicle RC verification
 *     tags:
 *       -  verify Vehicle RC
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                  vehicleNumber:
 *                    type: string
 *                    example: KL69D8374
 *
 *     responses:
 *        200:
 *          description: Verify vehicle RC
 *
 */
exports.router.post("/vehicle", vehicleRcVerifyController_1.getVehicleRcData);
