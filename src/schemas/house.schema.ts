import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(5, "Name must be at least 5 characters")
    .max(20, "Name must be at most 20 characters"),
  animal: yup
    .string()
    .required("Animal is required"),
  ghost: yup
    .string()
    .required("Ghost is required")
    .notOneOf(["Arnold"], "Ghost name cannot be Arnold")
    .test(
      "not-arnold",
      "Ghost name cannot include Arnold",
      (value) => !value || !value.includes("Arnold")
    ),
  commonRoom: yup
    .string()
});
