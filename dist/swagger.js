"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const apisPath = process.env.NODE_ENV === "production" ? [path_1.default.join(__dirname, "./Routes/**/*.js")] : ["./src/Routes/**/*.ts"];
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "api",
            version: "1.0.0",
            description: "A sample API with swagger documentation"
        },
        servers: [{ url: process.env.NODE_ENV === "production" ? `${process.env.PRODUCTION_URL}` : "http://localhost:3000/api/v1" }]
    },
    apis: apisPath
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
