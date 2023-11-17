/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CredentialsCreateFormInputValues = {
    user?: string;
    resort?: string;
    username?: string;
    password?: string;
};
export declare type CredentialsCreateFormValidationValues = {
    user?: ValidationFunction<string>;
    resort?: ValidationFunction<string>;
    username?: ValidationFunction<string>;
    password?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CredentialsCreateFormOverridesProps = {
    CredentialsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    resort?: PrimitiveOverrideProps<SelectFieldProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    password?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CredentialsCreateFormProps = React.PropsWithChildren<{
    overrides?: CredentialsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CredentialsCreateFormInputValues) => CredentialsCreateFormInputValues;
    onSuccess?: (fields: CredentialsCreateFormInputValues) => void;
    onError?: (fields: CredentialsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CredentialsCreateFormInputValues) => CredentialsCreateFormInputValues;
    onValidate?: CredentialsCreateFormValidationValues;
} & React.CSSProperties>;
export default function CredentialsCreateForm(props: CredentialsCreateFormProps): React.ReactElement;
