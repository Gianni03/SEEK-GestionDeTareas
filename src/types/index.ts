export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    createdAt: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
}

export interface AuthResponse {
    user: User;
    token: string;
}