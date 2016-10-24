import fs from 'fs';
import yaml from 'js-yaml';
import env from './env';

const config = yaml.safeLoad(
  fs.readFileSync('${__dirname}/../config/config.yml', 'utf-8')
);

/**
 * Returns the selected environment configuration
 * @return {Object} env().name
 * o
 * @return {}vacio
 * @returns la configuracion
 */

export default function getConfig() {
  return config[env().name] || {};
}
