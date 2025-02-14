# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop within a `useEffect` hook. The bug arises from improper usage of the dependency array in `useEffect`.  The example shows how an infinite loop occurs when missing or incorrectly providing dependencies.

## Bug Description

The `useEffect` hook in `bug.js` attempts to update the `count` state within itself, leading to continuous re-renders and an infinite loop.  The infinite loop occurs because the effect depends on `count`, and updating `count` causes the effect to run again, creating a never-ending cycle.  The solution involves correctly specifying the dependency array to prevent infinite rendering loops.

## Solution

The solution (`bugSolution.js`) demonstrates the correct way to manage state updates in `useEffect` using an empty dependency array `[]` to run the effect only once on mount or provide necessary dependencies to control when the effect runs.