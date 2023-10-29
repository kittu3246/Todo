// import React from 'react'
// import Navbar from './components/Navbar'

// let Name = 'shravan practice react';
// let array = ["user1","user2","user3","user4","user5"];
// let data = "boy";
// const App = () => {
//   return (
//     <div>
//       <h1>Hello React</h1>
//       <Navbar/>
//       {Name}
//       {array.map((user) =>{return <h2>{user}</h2>})}
//       {data ==="boy" ? <h1>Boy</h1> : <h1>Girl</h1>}
//     </div>
//   )
// }

// export default App


import React, { useState } from 'react'

import Todo from './Components/Todo';

const App = () => {

  return (
    <div>
      <Todo />
    </div>
  )
}

export default App
