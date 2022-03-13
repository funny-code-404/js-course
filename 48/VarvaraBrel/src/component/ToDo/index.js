import { useContext, useEffect, useRef, useState } from 'react';
import { DataContext } from '../../context/Context';
import { database } from '../../context/firebase';
import InputForm from './InputForm';
import Tusks from './Tusks';

const ToDoList = () => {
  return (
    <div>
      <InputForm />
      <Tusks />
    </div>
  );
};

export default ToDoList;
