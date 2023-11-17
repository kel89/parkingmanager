/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ToReserve } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ToReserveUpdateFormInputValues = {
    user?: string;
    resort?: string;
    reserveOn?: string;
    reserveTarget?: string;
};
export declare type ToReserveUpdateFormValidationValues = {
    user?: ValidationFunction<string>;
    resort?: ValidationFunction<string>;
    reserveOn?: ValidationFunction<string>;
    reserveTarget?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ToReserveUpdateFormOverridesProps = {
    ToReserveUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    resort?: PrimitiveOverrideProps<SelectFieldProps>;
    reserveOn?: PrimitiveOverrideProps<TextFieldProps>;
    reserveTarget?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ToReserveUpdateFormProps = React.PropsWithChildren<{
    overrides?: ToReserveUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    toReserve?: ToReserve;
    onSubmit?: (fields: ToReserveUpdateFormInputValues) => ToReserveUpdateFormInputValues;
    onSuccess?: (fields: ToReserveUpdateFormInputValues) => void;
    onError?: (fields: ToReserveUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ToReserveUpdateFormInputValues) => ToReserveUpdateFormInputValues;
    onValidate?: ToReserveUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ToReserveUpdateForm(props: ToReserveUpdateFormProps): React.ReactElement;
