# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @chrisdg/lotide`

**Require it:**

`const _ = require('@chrisdg/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

assertArraysEqual(array1,array2): asserts true when array1 === array2.

assertEqual(a,b): asserts true when a === b.

assertObjectsEqual(obj1,obj2): returns true when obj1 === obj2.

countLetters(string): returns an object with a count of the times a certain letter was present in the given string.

countOnly(allItems, ItemsToCount): returns an object containing the count of instances of the items in itemsToCount in Allitems.

eqArrays(array1,array2): returns true when array1 === array2.

eqObjects(obj1,obj2): returns true when a === b.

findKey(object, callback): returns the first key that returns true in the given callback function.

findKeyByValue(key,value): returns the first key to have a matching value with the value parameter.

head(array): returns the first value in an array.

letterPositions(string): return all the indices (zero-based positions) in the string where each character is found.

map(array,callback): returns and array modified by the callback function.

middle(array): returns the value in the middle of the array, if array length is even, returns middle 2 items of the array.

tail(array): returns the "tail" of an array: everything except for the first item (head) of the provided array.

takeUntil(array,callback): will keep collecting items from a provided array until the callback provided returns a truthy value.

without(array, itemsToRemove): returns and array with the values in the itemsToRemove removed from the array.