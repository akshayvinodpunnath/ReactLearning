function Button(props) {
  //const handleClick = () => setCounter(counter * 2);
  return (
    <button onClick={props.onClickFunction}>
      counter * 2
    </button>  
    );
}

function Display(props) {
  return (
    <div>
      {props.message}
    </div>
  );
}

function App() {
    const [counter, setCounter] = useState(5);
    const incrementCounter = () => setCounter(counter * 2);
    return (
      <div>
        <Button onClickFunction={incrementCounter}/>
        <Display message={counter}/>
      </div>
    )
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode')
)
