import React, {Fragment} from 'react';
import getData from './Api';
import './Post.css';

class Post extends React.Component {
   
    render() {
        return (
            <h5>{this.props.post.id} : {this.props.post.title}</h5>
        );
    }
}

class PostListComponent extends React.Component {
    render() {
        let postContainer = [];
        if(this.props.posts) {
            this.props.posts.forEach((value, index) => {
                postContainer.push(
                     
                        <Post post={value} key={index} />

                );   
            });
        }
        return (
            <Fragment>{postContainer}</Fragment>
        )
    }
}
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