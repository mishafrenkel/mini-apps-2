import React from 'react';

let DateSelector = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      From: 
      <input 
        type='text' 
        placeholder='YYYY-MM-DD' 
        style={{margin: '4px'}} 
        name='start'
        onChange={props.handleChange.bind(this)}>
        </input>
      To:
      <input 
        type='text' 
        placeholder='YYYY-MM-DD' 
        style={{margin: '4px'}}
        name='end'
        onChange={props.handleChange.bind(this)}>
        </input>
      <button type='submit'>Get Price History</button>
    </form>
  );
}

export default DateSelector;