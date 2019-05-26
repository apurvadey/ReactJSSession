import React, {Fragment} from 'react';


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Enter value here',
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        console.log('A name was submitted: '+ this.state.value);
        event.preventDefault();
    }

    handleChange(e) {
        // console.log(e);
        // console.log(e.target);
        // console.log(e.target.value);
        this.setState({
            value: e.target.value
        });
    }
    render() {
        return(
            <Fragment>
                <p>Currently my value is {this.state.value}</p>
                <form onSubmit={this.handleSubmit}>
                   <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                   </label>
                   <input type="submit" value="submit"></input>
                </form>
            </Fragment>
        )
    }
}

export default NameForm;