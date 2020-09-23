import React from 'react';
import './App.css';
import Customer from './components/Customer';
import { render } from '@testing-library/react';

const cus=[{
  'id':1,
  'image':'https://placeimg.com/64/64/any',
  'name':'gichan',
  'birthday':'7501191',
  'gender':'mele',
  'job':'student'
}
]
function App() {
  return (
    <div className="App">
      <Customer
        id={cus[0].id}
        image={cus[0].image}
        name={cus[0].name}
        birthday={cus[0].birthday}
        gender={cus[0].gender}
        job={cus[0].job}
      />
    </div>
  )
}
//test
export default App;
