import path from 'path';
import swaggerJSDoc, { type Options } from 'swagger-jsdoc';

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AI Study Assistant API',
      version: '1.0.0',
      description: 'API documentation for the AI Study Assistant backend',
    },
  },
  apis: [path.join(__dirname, '../**/*.{ts,js}')],
};

export const swaggerSpec = swaggerJSDoc(options);
