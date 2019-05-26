import React, {Fragment} from 'react';
import getData from './Api';
import PostListComponent from './PostListComponent';


class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            postData: []
        };
    }

    componentDidMount() {
        let postData = getData(`https://jsonplaceholder.typicode.com/posts`)
        postData.then((posts) => {
            this.setState({
                loading: false,
                postData: posts
            });
        });
        
        let data = [                        ];

        this.setState({
            loading: false,
            postData: data
        })
    
    }

    render() {
        return (
             <>
               {this.state.loading && <p>Loading .... </p>}
               {!this.state.loading && <PostListComponent posts={this.state.postData}/>}
             </>
        );
    }

}

export default MainComponent;