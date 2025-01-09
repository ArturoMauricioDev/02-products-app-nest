import 'dotenv/config';
import * as joi from 'joi';

interface EnVars {
  PORT: number;
  DATABASE_URL: string;
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnVars = value;

export const envs = {
  port: envVars.PORT,
  datebaseUrl: envVars.DATABASE_URL,
};