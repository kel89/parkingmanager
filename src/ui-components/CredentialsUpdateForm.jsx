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
import { getCredentials } from "../graphql/queries";
import { updateCredentials } from "../graphql/mutations";
const client = generateClient();
export default function CredentialsUpdateForm(props) {
  const {
    id: idProp,
    credentials: credentialsModelProp,
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
    username: "",
    password: "",
  };
  const [user, setUser] = React.useState(initialValues.user);
  const [resort, setResort] = React.useState(initialValues.resort);
  const [username, setUsername] = React.useState(initialValues.username);
  const [password, setPassword] = React.useState(initialValues.password);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = credentialsRecord
      ? { ...initialValues, ...credentialsRecord }
      : initialValues;
    setUser(cleanValues.user);
    setResort(cleanValues.resort);
    setUsername(cleanValues.username);
    setPassword(cleanValues.password);
    setErrors({});
  };
  const [credentialsRecord, setCredentialsRecord] =
    React.useState(credentialsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getCredentials.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getCredentials
        : credentialsModelProp;
      setCredentialsRecord(record);
    };
    queryData();
  }, [idProp, credentialsModelProp]);
  React.useEffect(resetStateValues, [credentialsRecord]);
  const validations = {
    user: [],
    resort: [],
    username: [],
    password: [],
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
          user: user ?? null,
          resort: resort ?? null,
          username: username ?? null,
          password: password ?? null,
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
            query: updateCredentials.replaceAll("__typename", ""),
            variables: {
              input: {
                id: credentialsRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CredentialsUpdateForm")}
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
              username,
              password,
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
              username,
              password,
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
        label="Username"
        isRequired={false}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              resort,
              username: value,
              password,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <TextField
        label="Password"
        isRequired={false}
        isReadOnly={false}
        value={password}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              resort,
              username,
              password: value,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
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
          isDisabled={!(idProp || credentialsModelProp)}
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
              !(idProp || credentialsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
