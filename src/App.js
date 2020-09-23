import React from 'react';
import './App.css';
import Customer from './components/Customer';
import { render } from '@testing-library/react';

const customers=[{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name':'gichan',
  'birthday':'7501191',
  'gender':'mele',
  'job':'student'
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name':'sangeun',
  'birthday':'770412',
  'gender':'femele',
  'job':'wife'
}]
class App extends React.Component {
  render(){
    return(
      <div>{
        customers.map(c => { 
          return(
            <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}/>
          );
          }
        )            
        }        
      </div>
    );
  }
}
//test
export default App;
