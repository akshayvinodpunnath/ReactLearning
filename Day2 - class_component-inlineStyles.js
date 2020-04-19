class Card extends React.Component {
  render() {
    return (
      <div className="gitHub-profile" style={{ margin: '1rem'}}>
        <img src="https://placehold.it/75" />
        <div className="info" style={{display:'inline-block', marginLeft: 10}}>
          <div className="name" style={{fontSize: '20px',fontWeight: 'bold'}}>Name here...</div>
          <div className="company">Company here...</div>
        </div>
      </div>
    );
  }
}


class App extends React.Component {
  render() {
    return (
      <body>
     <div>
      <div className="header" style={{ marign: '1rem', textAlign: 'center', fontWeight: 'bold', fontSize: '25px'}}>{this.props.title}</div>
      <Card />
    </div> 
      </body>
    );
  }
}

ReactDOM.render(
  <App title="The GitHub Cards App" />,
  mountNode,
);
