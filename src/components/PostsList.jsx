import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css'

function PostsList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="Jonah" body="React.js is awesome!" />
                <Post author="Purity" body="NextJs is also a good library" />
            </ul>
        </>
    );
}

export default PostsList;