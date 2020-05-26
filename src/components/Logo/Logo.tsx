import React from 'react';
import { LogoProperties } from '../../types/components'

export function Logo(props: LogoProperties) {
    return (
        <img
            style={props}
            src="https://i.ibb.co/d7XGL2L/Nukit-Logo-V2-800px-3.png"
            alt="Nukit"
        />
    );
}