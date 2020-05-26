import React, { useState, useEffect } from 'react';
import './App.css';
//types
import { Student } from './types/data'
//data
import studentsData from './data/students.data'
//componets
import { Heading } from './components/Heading/Heading';
import { SearchBox } from './components/SearchBox/Searchbox';
import { StudentTileList } from './components/StudentTileList/StudentTileList';

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
      <StudentTileList students={filterdStudents}/>

    </div>
  );

}

export default App;
