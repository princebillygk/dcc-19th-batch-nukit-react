import React from 'react';
import './Heading.scss';

import { Logo } from '../Logo/Logo';

export function Heading() {
    return (
        <header>
            <section className="hero">
                <h1 className="title">
                    DCC 19 Batch Information Terminal
                </h1>
                <p className="description">
                    powered by <Logo height="16px" />
                </p>
            </section>
        </header>
    );
}