
/**
* Obtiene el ambiente actual basado en la variable NODE_ENV
**/

export default function getEnv() {
    return {
        name: process.env.NODE_ENV ? process.env.NODE_ENV : 'production'
    };
}
