import { Validation } from "../components/Auth/SignIn/SignIn";

const checkValidity = (
  value: string,
  rules: Validation,
  sample?: string | undefined
): string | null => {

  console.log(`value ${value}`);
  console.log(`sample ${sample}`);
  const rulesMap = [
    {
      type: "required",
      check: (value: string): boolean => value.trim() !== "",
      message: "This field is requared"
    },
    {
      type: "minLength",
      check: (value: string, rules: Validation): boolean =>
        value.length >= rules.minLength,
      message: `This field minimum length is ${rules.minLength}`
    },
    {
      type: "isSame",
      check: (value: string, rules: Validation, sample: string | undefined): boolean =>
        value === sample,
      message: `Passwords don't match`
    }
  ];

  const failedRule = rulesMap
    .filter(rule => Object.keys(rules).includes(rule.type))
    .find(({ check }) => !check(value, rules, sample));


  return failedRule ? failedRule.message : null;
};

export default checkValidity;
