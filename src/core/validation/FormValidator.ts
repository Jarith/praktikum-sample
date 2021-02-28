import type { ValidationResult, ValidationSchema } from './ValidationSchema';

export class FormValidator {
    private validatorsMap: Record<string, ValidationSchema>;

    formState: Record<string, ValidationResult>;

    constructor(validatorsMap: Record<string, ValidationSchema>) {
        this.validatorsMap = validatorsMap;

        this.initFormState();
    }

    private initFormState() {
        this.formState = Object.keys(this.validatorsMap).reduce(
            (acc, fieldName) => {
                acc[fieldName] = { isValid: true };

                return acc;
            },
            {} as Record<string, ValidationResult>
        );
    }

    public get valid() {
        return Object.values(this.formState).every(({isValid}) => isValid);
    }

    public get invalid() {
        return !this.valid;
    }

    public clearState() {
        this.initFormState();
    }

    public validate(fieldName: string, value: string, ...args: any[]) {
        const scheme = this.validatorsMap[fieldName];

        if (!scheme) {
            throw new Error(`Отсутствует валидатор для поля ${fieldName}`);
        }

        const result = scheme.validate(value, ...args);

        this.formState = { ...this.formState, [fieldName]: result };
    }

    public validateAll(
        fieldsMap: Record<string, unknown>,
        argsMap: Record<string, unknown[]> = {}
    ) {
        for (const [field, value] of Object.entries(fieldsMap)) {
            const additionalArgs = argsMap[field] || [];

            this.validate(field, String(value), ...additionalArgs);
        }
    }
}
