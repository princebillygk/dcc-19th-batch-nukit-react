import React from 'react';
import './StudentTileList.scss';

import {StudentTile} from '../StudentTile/StudentTile'
import { Student } from '../../types/data';

export function StudentTileList({students}:{students: Student[]}) {
    return (
        <div className="std-tile-list">
            {students.map((student: Student) => (
                <StudentTile
                    img={`https://robohash.org/${student.roll}?set=set4&size=100x100&bgset=bg1`}
                    name={student.name}
                    reg={student.reg}
                    roll={student.roll}
                    section={student.section}
                    batch={student.batch}
                />
            ))}
        </div>
    );

}