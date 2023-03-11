import {describe, expect, test} from '@jest/globals';
import { isZero } from "./isZero";


describe('isZero module', () => {
  test("0を渡したらtrueになること", () => {
    const result = isZero(0);
    expect(result).toBe(true);
  });
});

describe('isZero module', () => {
  test("1を渡したらfalseになること", () => {
    const result = isZero(1);
    expect(result).toBe(false);
  });
});