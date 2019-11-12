import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import Context from '../contexts/context.js'
import Post from './Post.jsx'
import Add from './Add.jsx'

export default function LookPost(props) {

    let url = `http://localhost:7777/posts/${props.id}`;
    const [loading, setLoading] = useState(false);
    const { change, setChange } = useContext(Context);
    const { changePost, setChangePost } = useContext(Context);

    const changeP = () => {
        setChangePost(true);
    }

    useEffect(() => {
        if (changePost) { setChangePost(false) };
    }, [change]);

    const remove = () => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(url, {
                    method: 'delete',
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
    }

    return (
        <>
            {loading ? <Redirect to='/' /> :
                <Route exact path={`/posts/${props.id}`}>
                    {changePost ?
                        <Add {...props} /> :
                        <Post {...props}>
                            <div className='lookPost-buttonBox'>
                                <button className='lookPost-change' onClick={changeP}>Изменить</button>
                                <button className='lookPost-remove' onClick={remove}>Удалить</button>
                            </div>
                        </Post>
                    }
                </Route>
            }
        </>
    );
}