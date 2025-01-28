# React Router v6: useParams Hook Error Outside Route Component

This repository demonstrates a common error when using the `useParams` hook in React Router v6 and how to fix it.  The error occurs when attempting to access route parameters outside of a component that is actually rendered within a route.

## Problem

The `useParams` hook is context-aware.  It relies on the routing context established by the router. If you try to use it in a component not directly within the scope of a route, it will return `undefined`, resulting in an error.

## Solution

Ensure the `useParams` hook is used within a component that is nested within a `Route` or `Routes` component.  This provides the necessary routing context.