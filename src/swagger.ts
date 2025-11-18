import path from "path"
import swaggerJSDoc from "swagger-jsdoc";

const apisPath = process.env.NODE_ENV === "production" ? [path.join(__dirname, "./Routes/**/*.js")] : ["./src/Routes/**/*.ts"]

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
}


const swaggerSpec = swaggerJSDoc(options)

export default swaggerSpec