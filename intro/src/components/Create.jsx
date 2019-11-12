import React from 'react';
import { Link } from 'react-router-dom';

export default function Create() {

    return (
        <div className="create-Box">
            <Link exact to="/new" className="create-Link">Создать пост</Link>
        </div>
    );
}