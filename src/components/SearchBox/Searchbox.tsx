import React from 'react';
import './Searchbox.scss';

import { SearchBoxProps } from '../../types/components'

export function SearchBox(props: SearchBoxProps) {
    return (
        <div className = 'search-box'>
            <label> ~$ </label>
            <input
                type="search"
                name="search"
                placeholder={props.placeHolder}
                onChange={props.changeHandler}
            />
        </div>
    );
}