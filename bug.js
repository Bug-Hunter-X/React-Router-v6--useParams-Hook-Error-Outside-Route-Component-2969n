In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component that is rendered within a route.  This results in an error because `useParams` relies on the routing context provided by the router.

```javascript
// Incorrect usage
function MyComponent() {
  const params = useParams(); // Error: Cannot read properties of undefined (reading 'params')
  return <div>{params.id}</div>;
}
```