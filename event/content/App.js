import React, {Component,Fragment} from 'react';
import '../style/style.css';
import Home from './Home/Home';
import Form from './event/event';

  class App extends Component{
    render(){
      return(
          <Router>
            <div className="wrapper">
            	<div className="header">
            		<div className="navbar">
            			<div className="logo">
            				<img className="imgfluid" src={require('../images/babastudio-logo.png')}/>
            			</div>
            			<div className="menu">
							<ul>
								<Link to="/" className="li">Home</Link>
                                <Link to="/" className="li">Blogs</Link>
								<Link to="/" className="li">Galerry</Link>
								<Link to="/form" className="li">Kontak</Link>
								<Link to="/event" className="li">Simple event</Link>
							</ul>
						</div>
            		</div>
            	</div>
                <Fragment>
                    
                    <Router path="/" exact component={Home}/>
                    <Router path="/form" component={Form}/>

				</Fragment>
            </div>
        </Router>
    )
  }

}
export default App;
