// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from './page.module.css'
// const inter = Inter({ subsets: ['latin'] })

"use client";
import { useState } from "react";

             //calling client/browser side bcz using Server side components like TYPE, VALUE, OnChangehANDLER
export default function StrPrac() {
  const [val, setVal] = useState ("My Name is Safi Adam");    //Hook UseState to change fixed value    //assigning value to constant which is used in function
  const onChangeHandler = (e: any) => {   //arrow function
    console.log("e is ", e.target.value);
    setVal(e.target.value);
  };
  return (
    <>
    <p>WELCOME TO MY DASHBOARD</p>
    < input type={"text"} value={val} onChange={onChangeHandler} ></input>
    <br />
    Length of String above : {val.length}  
    <br />
    </>                                // HTML BY Default attributes
  )
};
