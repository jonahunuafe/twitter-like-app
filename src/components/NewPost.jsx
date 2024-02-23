import { useState } from 'react';

import classes from './NewPost.module.css';

function NewPost({ onCancel }) {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('')

    function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
    }

    function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
    }

    function submitHandler (event) {
        event.preventDefault();

        const postData = {
            body: enteredBody,
            author: enteredAuthor
        };

        console.log(postData);

        onCancel();
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
        <p>
            <label htmlFor="body">{}</label>
            <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p>
            <label htmlFor="name">{}</label>
            <input type="text" id="name" required onChange={authorChangeHandler} />
        </p>
        <p className={classes.actions}>
            <button type="button" onClick={onCancel}>Cancel</button>
            <button>Submit</button>
        </p>
        </form>
    );
}

export default NewPost;