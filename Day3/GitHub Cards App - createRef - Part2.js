const testData = [
  {
    name: "Akshay Vinod Punnath",
    avatar_url: "https://avatars3.githubusercontent.com/u/13138502?v=4",
    company: "SAP Labs"
  },
  {
    name: "npm",
    avatar_url: "https://avatars1.githubusercontent.com/u/6078720?v=4",
  company: "Npm Corp."
  },
  {
    name: "Ubuntu",
    avatar_url: "https://avatars1.githubusercontent.com/u/4604537?v=4",
    company: "Ubuntu Corp."
  },
  {
    name: "Python",
    avatar_url: "https://avatars3.githubusercontent.com/u/1525981?v=4",
    company: "Python Inc."
  },
  
]

const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card {...profile}/>)}
	</div>
);

class Form extends React.Component {
  userNameInput = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.userNameInput.current.value)
  };

	render() {
  	return (
    	<form onSubmit={this.handleSubmit} style={{ textAlign:"Center"}}>
    	  <input type="text" placeholder="GitHub username" ref={this.userNameInput} style={{ textAlign:"Center"}} required />
        <button>Add card</button>
    	</form>
    );
  }
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="gitHub-profile" style={{ margin: '1rem'}}>
        <img src={profile.avatar_url} style={{borderRadius: '8px', width: '20%'}}/>
        <div className="info" style={{display:'inline-block', marginLeft: 10}}>
          <div className="name" style={{fontSize: '20px',fontWeight: 'bold'}}>{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}


class App extends React.Component {
  state = {
    profiles: testData,
  };

  render() {
    return (
      <body>
     <div>
      <div className="header" style={{ marign: '1rem', textAlign: 'center', fontWeight: 'bold', fontSize: '25px'}}>{this.props.title}</div>
       <Form />
      <CardList profiles={this.state.profiles} />
    </div> 
      </body>
    );
  }
}

ReactDOM.render(
  <App title="The GitHub Cards App" />,
  mountNode,
);
