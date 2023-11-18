/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ToReserveCreateFormInputValues = {
    user?: string;
    resort?: string;
    reserveOn?: string;
    reserveTarget?: string;
    reserveTime?: string;
};
export declare type ToReserveCreateFormValidationValues = {
    user?: ValidationFunction<string>;
    resort?: ValidationFunction<string>;
    reserveOn?: ValidationFunction<string>;
    reserveTarget?: ValidationFunction<string>;
    reserveTime?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToReserveCreateFormOverridesProps = {
    ToReserveCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    resort?: PrimitiveOverrideProps<SelectFieldProps>;
    reserveOn?: PrimitiveOverrideProps<TextFieldProps>;
    reserveTarget?: PrimitiveOverrideProps<TextFieldProps>;
    reserveTime?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ToReserveCreateFormProps = React.PropsWithChildren<{
    overrides?: ToReserveCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ToReserveCreateFormInputValues) => ToReserveCreateFormInputValues;
    onSuccess?: (fields: ToReserveCreateFormInputValues) => void;
    onError?: (fields: ToReserveCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ToReserveCreateFormInputValues) => ToReserveCreateFormInputValues;
    onValidate?: ToReserveCreateFormValidationValues;
} & React.CSSProperties>;
export default function ToReserveCreateForm(props: ToReserveCreateFormProps): React.ReactElement;
