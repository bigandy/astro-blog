import { expect, test } from 'vitest'
import {transform } from './transformer.mjs';

const functions = [
    {
        name: '--test',
        code: 'calc(var(--column-gap-size) * $1)'
    },
    {
        name: "--unit",
        code: 'calc(2 * $1)',
    },
    {
        name: "--multi",
        code: 'calc($1 * $2 * $3)',
    },
    {
        name: "--multi-different",
        code: "$1(from $2 $3 / $4)"
    }

];

test('single "--unit" function', () => {
    expect(transform('--unit(2)', functions))
        .toBe('calc(2 * 2)')
});

test('single "--test" function', () => {
    expect(transform('--test(2.5)', functions))
        .toBe('calc(var(--column-gap-size) * 2.5)')
});

test('double use of function in same declaration', () => {
    expect(transform('--test(32) --test(3)', functions))
        .toBe('calc(var(--column-gap-size) * 32) calc(var(--column-gap-size) * 3)')
});

test('double use of function in same declaration -- out of order', () => {
    expect(transform('--test(3) --test(32)', functions))
        .toBe('calc(var(--column-gap-size) * 3) calc(var(--column-gap-size) * 32)')
});

test('use of two functions in same declaration', () => {
    expect(transform('--unit(3) --test(3)', functions))
        .toBe('calc(2 * 3) calc(var(--column-gap-size) * 3)')
});

test('use of two functions in same declaration -- out of order', () => {
    expect(transform('--test(14) --unit(30)', functions))
        .toBe('calc(var(--column-gap-size) * 14) calc(2 * 30)')
});


test('use of multiple arguments to one function', () => {
    expect(transform('--multi(2, 3, 4)', functions))
        .toBe('calc(2 * 3 * 4)')
});

test('use of multiple arguments to one function -- out of order', () => {
    expect(transform('--multi(3, 2, 1)', functions))
        .toBe('calc(3 * 2 * 1)')
});

test('use of multiple arguments to one function with different input types', () => {
    expect(transform('--multi-different(hsl, red, "h s l", 0.3)', functions))
        .toBe('hsl(from red h s l / 0.3)')
});

test('Bug: attr(type()) was breaking the build. Now it still returns the initial code if it does this. Fixed', () => {
    expect(transform('attr(data-attr-color type(<color>))', functions))
        .toBe('attr(data-attr-color type(<color>))')
})