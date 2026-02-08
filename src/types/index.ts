export type TaskStatus = 'pending' | 'in-progress' | 'completed';

/**
 * @interface Task
 * @description Interface para representar una tarea
 * @property {string} id - ID de la tarea
 * @property {string} title - Título de la tarea
 * @property {string} description - Descripción de la tarea
 * @property {TaskStatus} status - Estado de la tarea
 * @property {string} createdAt - Fecha de creación de la tarea
 */
export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: string;
}

/**
 * @interface User
 * @description Interface para representar un usuario
 * @property {string} id - ID del usuario
 * @property {string} name - Nombre del usuario
 * @property {string} email - Email del usuario
 */
export interface User {
    id: string;
    name: string;
    email: string;
}

/**
 * @interface AuthResponse
 * @description Interface para representar la respuesta de autenticación
 * @property {User} user - Usuario autenticado
 * @property {string} token - Token de autenticación
 */
export interface AuthResponse {
    user: User;
    token: string;
}