const REQUIRED_ERROR = 'Обязательно';
const MIN_LENGTH_ERROR = 'Минимальная длина';
const MAX_LENGTH_ERROR = 'Максимальная длина';

export type ValidationResult = {
    isValid: boolean;
    error?: string;
};

type Validator = (value: string, ...additionalArgs: any[]) => ValidationResult;

export class ValidationSchema {
    private validators: Validator[];

    constructor(validators: Validator[] = []) {
        this.validators = validators;
    }

    private createValidationResult(
        isValid: boolean,
        error: string
    ): ValidationResult {
        return isValid ? { isValid } : { isValid, error };
    }

    required(error: string = REQUIRED_ERROR): ValidationSchema {
        const validator = (value: string): ValidationResult => {
            return this.createValidationResult(!!value, error);
        };

        return new ValidationSchema([...this.validators, validator]);
    }

    minLength(length: number, error?: string): ValidationSchema {
        const actualError = error || `${MIN_LENGTH_ERROR}: ${length}`;

        const validator = (value: string): ValidationResult => {
            return this.createValidationResult(
                value.length >= length,
                actualError
            );
        };

        return new ValidationSchema([...this.validators, validator]);
    }

    maxLength(length: number, error?: string): ValidationSchema {
        const actualError = error || `${MAX_LENGTH_ERROR}: ${length}`;

        const validator = (value: string): ValidationResult => {
            return this.createValidationResult(
                value.length <= length,
                actualError
            );
        };

        return new ValidationSchema([...this.validators, validator]);
    }

    custom(
        predicate: (value: string, ...additionalArgs: any[]) => boolean,
        error: string
    ): ValidationSchema {
        const validator = (
            value: string,
            ...additionalArgs: any[]
        ): ValidationResult => {
            return this.createValidationResult(
                predicate(value, ...additionalArgs),
                error
            );
        };

        return new ValidationSchema([...this.validators, validator]);
    }

    pattern(regExp: RegExp, error: string): ValidationSchema {
        const validator = (value: string): ValidationResult => {
            return this.createValidationResult(regExp.test(value), error);
        };

        return new ValidationSchema([...this.validators, validator]);
    }

    validate(value: string, ...additionalArgs: any[]): ValidationResult {
        for (const validator of this.validators) {
            const result = validator(value, ...additionalArgs);
            if (!result.isValid) return result;
        }

        return { isValid: true };
    }
}
