```javascript
// Correct usage
import { useParams } from 'react-router-dom';

function MyComponent() {
  const params = useParams();
  return <div>{params.id}</div>;
}

function MyRoute(){
  return(
    <Route path="/:id" element={<MyComponent/>}/>
  );
}
```