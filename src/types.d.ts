export interface Users {
    id: string;
    name: string;
    email: string;
    active: boolean;
    role: string;
}

export interface UserMutation {
    name: string;
    email: string;
    active: boolean;
    role: string;
}