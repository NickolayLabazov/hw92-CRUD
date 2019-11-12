import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import nanoid from 'nanoid';
import Context from '../contexts/context.js'

export default function Add(props) {

    const { setChangePost } = useContext(Context);
    const { setChange } = useContext(Context);
    const [newPost, setNewPost] = useState({
        post: props.content ? props.content : '',
    })

    const [loading, setLoading] = useState(false);

    let url = 'http://localhost:7777/posts';

    const formChange = (e) => {
        setNewPost(
            { post: e.target.value, }
        )
    }

    const formSubmit = (e) => {
        e.preventDefault();
        const fetchUsers = async () => {
            try {
                const response = await fetch(url, {
                    method: 'post',
                    body: JSON.stringify({
                        id: props.id ? props.id : nanoid(),                        
                        content: newPost.post
                    })
                });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
            } catch (e) {
                console.error(e)
            } finally {
                setChange(prevChange => prevChange + 1);
                setLoading(true);
            }
        }

        fetchUsers();

        setNewPost(
            { post: '', }
        )
    }

    const setLoad = () => {
        setChangePost(false);
        setLoading(true);
    }

    return (

        <div>
            {loading ? <Redirect to='/' /> :
                <div className="add-Box">
                    <div className='add-del' onClick={setLoad}>&times;</div>
                    <form action="." onSubmit={formSubmit}>
                        <textarea
                            onChange={formChange}
                            name="bewPost"
                            id=""
                            cols="30" rows="10"
                            value={newPost.post}
                        >
                        </textarea>
                        <button className="create-Link">{props.content ? 'Сохранить' : 'Опубликовать'}</button>
                    </form>
                </div>
            }
        </div>
    );
}