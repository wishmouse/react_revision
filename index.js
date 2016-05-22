import React from 'react'
import { render } from 'react-dom'
import CupcakeCreator from './components/cupcakeCreator'
import ListCupcakes from './components/listCupcakes'
import ComplimentMachine from './components/complimentMachine'
import Sliders2 from './components/sliders'
import Button from './components/button'
import Wrapper from './components/mounting'
import Mounting from './components/mounting'





render(
  <div>
    <ListCupcakes items={['Classic chocolate', 'Blueberry Cheesecake', 'Hash and white chocolate']} className='list'/>
    <CupcakeCreator name="Banana and Caramel" initial val = {4}/>
    <CupcakeCreator name="Strawberry Marshmallow" initial val = {10}/>
    <ComplimentMachine compliment=" get gooey over your fav cupcake.." inital value={'PEACHES'}/>
    <Sliders2 />
    <Button />
    <Wrapper />
    <Mounting />
  </div>, document.querySelector('main')
)


