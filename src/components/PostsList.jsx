import { useState } from 'react'

import Modal from './Modal';
import NewPost from "./NewPost";
import Post from "./Post";
import classes from './PostsList.module.css'

function PostsList() {
    const [modalIsVisible, setModalIsVisible] = useState(true);
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('')

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function hideModalHandler() {
        setModalIsVisible(false);
    }

    return (
        <>
            {modalIsVisible && (
                <Modal onClose={hideModalHandler}>
                    <NewPost 
                        onBodyChange={bodyChangeHandler} 
                        onAuthorChange={authorChangeHandler} 
                    />
                </Modal>
            )}
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="Purity" body="NextJs is also a good library" />
            </ul>
        </>
    );
}

export default PostsList;