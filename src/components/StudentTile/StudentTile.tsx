import React from 'react';
import { Student } from '../../types/data'
import './StudentTile.scss';

export function StudentTile(std: Student) {
    return (
        <div className="std-tile">
            <div className="std-tile-img">
                <img
                    src={std.img ? std.img : ''}
                    alt=""
                />
            </div>
            <div className="std-tile-description">
                <h3>{std.name}</h3>
                <p>
                    <b>Reg:</b> {std.reg} <br />
                    <b>Roll:</b> {std.roll}<br />
                    <b>Section:</b> {std.section}<br />
                </p>
            </div>
        </div>
    );
}