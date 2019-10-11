// import React, { useState, useEffect } from 'react';

// import { getUsers } from 'source';

// const App = () => {
//   const [list, setList] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     console.log('did mount/update');
//     getUsers(search).then(({ data }) => setList(data));

//     return () => console.log('unmount');
//   }, [search]);

//   return (
//     <div className="App">
//       <input
//         placeholder="enter value"
//         onChange={({ target }) => setSearch(target.value)}
//       />
//       <ul>
//         {list.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
