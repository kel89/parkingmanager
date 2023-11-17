/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ToReserve } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ToReserveUpdateForm(props) {
  const {
    id: idProp,
    toReserve,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    user: "",
    resort: undefined,
    reserveOn: "",
    reserveTarget: "",
  };
  const [user, setUser] = React.useState(initialValues.user);
  const [resort, setResort] = React.useState(initialValues.resort);
  const [reserveOn, setReserveOn] = React.useState(initialValues.reserveOn);
  const [reserveTarget, setReserveTarget] = React.useState(
    initialValues.reserveTarget
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = toReserveRecord
      ? { ...initialValues, ...toReserveRecord }
      : initialValues;
    setUser(cleanValues.user);
    setResort(cleanValues.resort);
    setReserveOn(cleanValues.reserveOn);
    setReserveTarget(cleanValues.reserveTarget);
    setErrors({});
  };
  const [toReserveRecord, setToReserveRecord] = React.useState(toReserve);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ToReserve, idProp)
        : toReserve;
      setToReserveRecord(record);
    };
    queryData();
  }, [idProp, toReserve]);
  React.useEffect(resetStateValues, [toReserveRecord]);
  const validations = {
    user: [],
    resort: [],
    reserveOn: [],
    reserveTarget: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          user,
          resort,
          reserveOn,
          reserveTarget,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            ToReserve.copyOf(toReserveRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ToReserveUpdateForm")}
      {...rest}
    >
      <TextField
        label="User"
        isRequired={false}
        isReadOnly={false}
        value={user}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user: value,
              resort,
              reserveOn,
              reserveTarget,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          if (errors.user?.hasError) {
            runValidationTasks("user", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("user", user)}
        errorMessage={errors.user?.errorMessage}
        hasError={errors.user?.hasError}
        {...getOverrideProps(overrides, "user")}
      ></TextField>
      <SelectField
        label="Resort"
        placeholder="Please select an option"
        isDisabled={false}
        value={resort}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              resort: value,
              reserveOn,
              reserveTarget,
            };
            const result = onChange(modelFields);
            value = result?.resort ?? value;
          }
          if (errors.resort?.hasError) {
            runValidationTasks("resort", value);
          }
          setResort(value);
        }}
        onBlur={() => runValidationTasks("resort", resort)}
        errorMessage={errors.resort?.errorMessage}
        hasError={errors.resort?.hasError}
        {...getOverrideProps(overrides, "resort")}
      >
        <option
          children="Solitude"
          value="SOLITUDE"
          {...getOverrideProps(overrides, "resortoption0")}
        ></option>
        <option
          children="Alta"
          value="ALTA"
          {...getOverrideProps(overrides, "resortoption1")}
        ></option>
        <option
          children="Brighton"
          value="BRIGHTON"
          {...getOverrideProps(overrides, "resortoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Reserve on"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={reserveOn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              resort,
              reserveOn: value,
              reserveTarget,
            };
            const result = onChange(modelFields);
            value = result?.reserveOn ?? value;
          }
          if (errors.reserveOn?.hasError) {
            runValidationTasks("reserveOn", value);
          }
          setReserveOn(value);
        }}
        onBlur={() => runValidationTasks("reserveOn", reserveOn)}
        errorMessage={errors.reserveOn?.errorMessage}
        hasError={errors.reserveOn?.hasError}
        {...getOverrideProps(overrides, "reserveOn")}
      ></TextField>
      <TextField
        label="Reserve target"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={reserveTarget}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              resort,
              reserveOn,
              reserveTarget: value,
            };
            const result = onChange(modelFields);
            value = result?.reserveTarget ?? value;
          }
          if (errors.reserveTarget?.hasError) {
            runValidationTasks("reserveTarget", value);
          }
          setReserveTarget(value);
        }}
        onBlur={() => runValidationTasks("reserveTarget", reserveTarget)}
        errorMessage={errors.reserveTarget?.errorMessage}
        hasError={errors.reserveTarget?.hasError}
        {...getOverrideProps(overrides, "reserveTarget")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || toReserve)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || toReserve) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
