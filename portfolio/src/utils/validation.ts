import { IValidationError } from "../types/ValidationError";

export interface ValidationErrorProps{
    validError: IValidationError
}

export const validateForm = ({validError} :  ValidationErrorProps) =>{
    const errors: IValidationError = {};

    if (!validError.name?.trim()) errors.name = "Имя обязательно";
    if (!validError.email?.trim()) {
        errors.email = "Email обязателен";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(validError.email)) {
        errors.email = "Неверный формат email";
    }
    if (!validError.message?.trim()) errors.message = "Сообщение обязательно";

    return errors;
}
