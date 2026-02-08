/**
 * @function wait
 * @description Función que espera un tiempo determinado
 * @param {number} ms - Tiempo en milisegundos
 * @returns {Promise<void>} - Promise que se resuelve después del tiempo determinado
 */
export default function wait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}