const CardList = (props) => (
	<div>
  	{props.profiles.map(profile => <Card key= {profile.id} {...profile}/>)}
	</div>
);

class Form extends React.Component {
  state = {
    userName: ''
  };
 
  handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
    this.props.onSubmit(resp.data);
    this.setState({ userName: ''})
  };

	render() {
  	return (
    	<form onSubmit={this.handleSubmit} style={{ textAlign:"Center"}}>
    	  <input
          type="text" 
          placeholder="GitHub username" 
          value={this.state.userName} 
          onChange={event => this.setState({ userName: event.target.value })}
          style={{ textAlign:"Center"}} 
          required 
        />
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
        <img src={profile.avatar_url} style={{borderRadius: '8px', width: '40px'}}/>
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
    profiles: [],
  };

  addNewProfile = (profileData) => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <body>
     <div>
      <div className="header" style={{ marign: '1rem', textAlign: 'center', fontWeight: 'bold', fontSize: '25px'}}>{this.props.title}</div>
       <Form onSubmit={this.addNewProfile}/>
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
