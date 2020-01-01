import React from 'react';
import './App.css';
import Header from './composant/header/header.js'
import Section1 from './composant/main/section1/Section1.js'
import Section2 from './composant/main/Section2/Section2.js'
import Section3 from './composant/main/Section3/Section3.js';
import Section4 from './composant/main/Section4/Section4.js';
import Section5 from './composant/main/Section5/Section5.js';
import Section6 from './composant/main/Section6/Section6.js';
import Section7 from './composant/main/Section7/Section7.js';
import Section8 from './composant/main/Section8/Section8.js';
import Footer from './composant/Footer/Footer.js';
import * as data from './data.js';

function App() {
  return (
    <div className="App">
      <Header items={data.dataHead}/>
      <Section1 />
      <Section2/>
      <Section3 items={data.dataParaghrapheSection3}/>
      <Section4 items={data.dataSection4}/>
      <Section5 items={data.dataSection5}/>
      <Section6/>
      <Section7 items={data.dataSection7}/>
      <Section8 items={data.dataSection8}/>
      <Footer/>
    </div>
  );
}

export default App;
