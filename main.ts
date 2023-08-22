/** You can work on this challenge directly in the typescript playground: https://tsplay.dev/WzxBRN*/
/** For this challenge you need to create the Branded utility type  */

declare const __brand: unique symbol;
type Brand<B> = { [__brand]: B };
type Branded<T, B> = T & Brand<B>;

type Age = Branded<number, "Age">; // Replace the never with the corresponding primitive type
/**
 * 🏋️‍♀️ Fill the function createAge, it should accept a number as input and return a branded Age
 **/
function createAge(age: number): Age {
  if (age <= 0 || age >= 125) {
    throw new Error("validation error: age must be in 0-125 range");
  }
  // Perform logic and return Age
  return age as Age;
}
/**
 * 🏋️‍♀️ This function should accept a branded Age type and return a number
 */
function getBirthYear(age: Age): number {
  // Perform logic and return Age
  return new Date().getFullYear() - age;
}

/** Usage **/
const myAge = createAge(36); // Should be ok
const birthYear = getBirthYear(myAge); // Should be ok
const birthYear2 = getBirthYear(36); // This should show an error
/** Type Tests */
import type { Equal, Expect } from "@type-challenges/utils";
type cases = [
  Expect<Equal<typeof myAge, Age>>,
  Expect<Equal<typeof birthYear, number>>,
  Expect<Equal<Parameters<typeof createAge>, [number]>>,
  Expect<Equal<Parameters<typeof getBirthYear>, [Age]>>
];
