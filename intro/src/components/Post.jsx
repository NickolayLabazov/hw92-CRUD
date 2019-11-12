import React, { useState } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';

export default function Post(props) {

    const [redir, setRedir] = useState(false)

    const back = () => {
        setRedir(true)
    }

    return (
        <>
            {redir ? <Redirect to='/' /> :
                <Route exact path={props.look ? `/posts/${props.id}` : "/"}>
                    {props.look ?
                        <div className="post-Box">
                            {props.look ? <div className='add-del' onClick={back}>&lt;</div> : null}
                            <p>Имя пользователя</p>
                            <p>{props.content}</p>
                            {props.children}</div> :
                        <Link to={`/posts/${props.id}`} className="post-Box">
                            <p>Имя пользователя</p>
                            <p>{props.content}</p>
                        </Link>
                    }

                </Route>
            }
        </>
    );
}