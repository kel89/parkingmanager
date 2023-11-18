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
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createToReserve } from "../graphql/mutations";
const client = generateClient();
export default function ToReserveCreateForm(props) {
  const {
    clearOnSuccess = true,
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
    resort: "",
    reserveOn: "",
    reserveTarget: "",
    reserveTime: "",
  };
  const [user, setUser] = React.useState(initialValues.user);
  const [resort, setResort] = React.useState(initialValues.resort);
  const [reserveOn, setReserveOn] = React.useState(initialValues.reserveOn);
  const [reserveTarget, setReserveTarget] = React.useState(
    initialValues.reserveTarget
  );
  const [reserveTime, setReserveTime] = React.useState(
    initialValues.reserveTime
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUser(initialValues.user);
    setResort(initialValues.resort);
    setReserveOn(initialValues.reserveOn);
    setReserveTarget(initialValues.reserveTarget);
    setReserveTime(initialValues.reserveTime);
    setErrors({});
  };
  const validations = {
    user: [],
    resort: [],
    reserveOn: [],
    reserveTarget: [],
    reserveTime: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
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
          reserveTime,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createToReserve.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ToReserveCreateForm")}
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
              reserveTime,
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
              reserveTime,
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
              reserveTime,
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
              reserveTime,
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
      <TextField
        label="Reserve time"
        isRequired={false}
        isReadOnly={false}
        type="time"
        value={reserveTime}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              resort,
              reserveOn,
              reserveTarget,
              reserveTime: value,
            };
            const result = onChange(modelFields);
            value = result?.reserveTime ?? value;
          }
          if (errors.reserveTime?.hasError) {
            runValidationTasks("reserveTime", value);
          }
          setReserveTime(value);
        }}
        onBlur={() => runValidationTasks("reserveTime", reserveTime)}
        errorMessage={errors.reserveTime?.errorMessage}
        hasError={errors.reserveTime?.hasError}
        {...getOverrideProps(overrides, "reserveTime")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
