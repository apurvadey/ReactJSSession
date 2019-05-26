import React, {Fragment} from 'react';
import Post from './Postcomponent';



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
            <Fragment className="post_style">{postContainer}</Fragment>
        )
    }
}

export default PostListComponent;