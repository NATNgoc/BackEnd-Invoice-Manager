import * as Joi from '@hapi/joi';
import { EnvKeyConstant } from './env.constants';

export const envSchema = Joi.object({
  [EnvKeyConstant.PORT]: Joi.number().required(),
  [EnvKeyConstant.JWT_ACCESS_TOKEN_EXPIRATION_TIME]: Joi.number().required(),
  [EnvKeyConstant.JWT_REFRESH_TOKEN_EXPIRATION_TIME]: Joi.number().required(),
  [EnvKeyConstant.JWT_VERIFY_TOKEN_EXPIRATION_TIME]: Joi.number().required(),
  [EnvKeyConstant.JWT_REQUEST_TOKEN_EXPIRATION_TIME]: Joi.number().required(),
  [EnvKeyConstant.SECRET_KEY]: Joi.string().required(),
  [EnvKeyConstant.REFRESH_TOKEN_KEY]: Joi.string().required(),
  [EnvKeyConstant.POSTGRES_HOST]: Joi.string().required(),
  [EnvKeyConstant.POSTGRES_PORT]: Joi.number().required(),
  [EnvKeyConstant.POSTGRES_USER]: Joi.string().required(),
  [EnvKeyConstant.POSTGRES_PASSWORD]: Joi.string().required(),
  [EnvKeyConstant.POSTGRES_DB]: Joi.string().required(),
  [EnvKeyConstant.ENVIRONMENT]: Joi.string().required(),
});
