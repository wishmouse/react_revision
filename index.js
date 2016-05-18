import React from 'react'
import { render } from 'react-dom'
import CupcakeCreator from './components/cupcakeCreator'
import ListCupcakes from './components/listCupcakes'
import ComplimentMachine from './components/complimentMachine'




render(
  <div>
    <ListCupcakes items={['Classic chocolate', 'Blueberry Cheesecake', 'Hash and white chocolate']} className='list'/>
    <CupcakeCreator name="Banana and Caramel" initial val = {4}/>
    <CupcakeCreator name="Strawberry Marshmallow" initial val = {10}/>
    <ComplimentMachine compliment=" get gooey over your fav cupcake.." inital value={'PEACHES'}/>
  </div>, document.querySelector('main')
)

console.log('welcome to revision')
