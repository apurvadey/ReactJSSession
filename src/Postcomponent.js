import React from 'react';


class Post extends React.Component {
   
    render() {
        return (
            <h5>{this.props.post.id} : {this.props.post.title}</h5>
        );
    }
}

export default Post;