import express from "express"
import type { Router } from "express"
import { getVehicleRcData } from "../controller/vehicleRcVerifyController";



export const router: Router = express.Router();

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

router.post("/vehicle", getVehicleRcData)
