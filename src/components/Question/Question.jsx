import React from 'react';
import './Question.css'
import Accordion from 'react-bootstrap/Accordion';

const Question = () => {
    return (
        <div className='question-container'>
             <Accordion defaultActiveKey={['0']}  >
      <Accordion.Item eventKey="0">
        <Accordion.Header>#1 What is the difference between props and state in react js?</Accordion.Header>
        <Accordion.Body>
        Props is short for properties and they are used to pass data between React components. React’s data flow between components is uni-directional (from parent to child only).<br/> 
        React has another special built-in object called state, which allows components to create and manage their own data. So unlike props, components cannot pass data with state, but they can create and manage it internally.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>#2 How does work usestate?</Accordion.Header>
        <Accordion.Body>
        useState is a hook in React that allows you to add state to a functional component. It takes an initial state value as a parameter and returns an array with two values: the current state value and a function to update the state. When the state is updated, React re-renders the component and any child components that use the updated state value.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>#3 What does useeffect do without loading data?</Accordion.Header>
        <Accordion.Body>
        The useEffect hook in React. It can be used for any side effect that needs to be performed after a component has rendered. it can be used to update the title of the page, set up event listeners, or perform any cleanup tasks when a component is unmounted. Essentially, useEffect allows you to synchronize a component with external changes or other side effects outside of rendering.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>#4 How does react work? </Accordion.Header>
        <Accordion.Body>
        React is a JavaScript library for building user interfaces. It uses a virtual DOM (Document Object Model) to optimize performance by minimizing the number of changes needed to update the user interface. When a component's state or props change, React re-renders the component and updates the virtual DOM. React then efficiently updates only the parts of the real DOM that have changed, resulting in faster and more efficient updates. React also provides a declarative approach to building UI, where you define what the UI should look like at any point in time and React handles the actual updates.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Question;