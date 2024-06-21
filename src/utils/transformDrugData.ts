export const transformDrugData = (data: Object) => {
  return Object.entries(data).map(([key, value]) => {
    // First letter capitalized and replace '_' with spaces in each content section
    let transformedKey = key.replaceAll("_", " ");
    const firstLetterUppercase = transformedKey.charAt(0).toUpperCase();
    const finalKey = firstLetterUppercase + transformedKey.substring(1);

    if (typeof value === "object" && !Array.isArray(value) && value !== null) {
      const valueArray = Object.entries(value).map(
        ([innerKey, innerValue]) => ({
          key: innerKey,
          value: innerValue,
        })
      );
      return {
        key: finalKey,
        value: valueArray,
      };
    } else {
      return {
        key: finalKey,
        value: value,
      };
    }
  });
};

/* 
  Explanation:

  During testing with various drug information data, it was discovered that the structure of the received object is not consistent across all drugs.

  For example:
  - Some drugs might have `{boxed_warning: ['value']}` while others might not have this property at all.
  - Some cases include 10+ unique key-value pairs for different drugs, making hardcoding each property error-prone and time-consuming.

  The solution is to dynamically map through each piece of data and render each drug's information independently.
  To achieve this, we need to transform the object containing key-value pairs:

  {
    date: ['22-22-2222'],
    color: ['blue'],
  }

  - Into an array of objects:
  
  [
    {key: 'date', value: ['22-22-2222']},
    {key: 'color', value: ['blue']}
  ]

  In some cases, such as the 'openfda' property, the value is an object instead of an array. 
  Therefore, we need to apply the same transformation to this inner object. 
  The first part of the function handles this by converting the inner object into an array of {key, value} pairs:

  const valueArray = Object.entries(value).map(
        ([innerKey, innerValue]) => ({
          key: innerKey,
          value: innerValue,
        })
      );
*/
