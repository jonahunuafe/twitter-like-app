import Modal from './Modal';
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css'

function PostsList({ isPosting, onStopPosting }) {

    return (
        <>
            {isPosting && (
                <Modal onClose={onStopPosting}>
                    <NewPost 
                        onCancel={onStopPosting}
                    />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author="Purity" body="NextJs is also a good library" />
            </ul>
        </>
    );
}

export default PostsList;