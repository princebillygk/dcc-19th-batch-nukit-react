import React, { useState, useEffect } from 'react';
import './App.css';
//types
import { Student } from './types/data'
//data
import studentsData from './data/students.data'
//componets
import { Heading } from './components/Heading/Heading';
import { SearchBox } from './components/SearchBox/Searchbox';
import { StudentTile } from './components/StudentTile/StudentTile';

function App() {
  const [students, setStudents] = useState<Student[]>([]);
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    setStudents(studentsData);
  });

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.currentTarget.value.toLowerCase());
  }

  const filterdStudents = students.filter(student =>
    student.name.toLowerCase().includes(searchText) ||
    student.reg.toString().includes(searchText)
  );

  return (
    <div className='App'>
      <Heading />
      <SearchBox
        placeHolder="name or reg"
        changeHandler={searchHandler}
      />

      {filterdStudents.map((student: Student) => (
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

export default App;
