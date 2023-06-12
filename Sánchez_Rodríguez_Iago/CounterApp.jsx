import { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      inputValue: ''
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  }

  setCount = () => {
    const { inputValue } = this.state;
    const parsedValue = parseInt(inputValue, 10);

    if (!isNaN(parsedValue)) {
      this.setState({ count: parsedValue });
    }
  }

  resetCount = () => {
    this.setState({ count: 0 });
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    const { count, inputValue } = this.state;

    return (
      <main className="flex items-center justify-center h-screen flex-col" >
        <h1 className="text-8xl text-center ">{count}</h1>
        <div className="grid grid-rows-2 gap-4 p-6 m-5 bg-slate-300 rounded-md shadow-md">
          <div className="grid grid-cols-3 gap-4">
            <button onClick={this.decrement} className='bg-green-400 rounded-md shadow-md'>Reducir</button>
            <button onClick={this.resetCount} className='bg-green-400 rounded-md shadow-md'>Reiniciar</button>
            <button onClick={this.increment} className='bg-green-400 rounded-md shadow-md'>Aumentar</button>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <input type="text" value={inputValue} onChange={this.handleChange} className='col-span-2 shadow-md'/>
            <button onClick={this.setCount} className='bg-green-400 rounded-md shadow-md'>Establecer</button>
          </div>
        </div>
      </main>
    );
  }
}

function CounterApp() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default CounterApp;
