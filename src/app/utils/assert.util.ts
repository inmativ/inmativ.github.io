/**
 стрелочные assert функции должны иметь явное указание типа.
 @link {https://github.com/microsoft/TypeScript/issues/34523#issuecomment-700491122} */
type AssertFunction = (value: unknown, msg?: string) => asserts value;

export const assert: AssertFunction = (value: unknown, msg?: string): asserts value => {
  if (!value) {
    throw new Error(msg);
  }
};
