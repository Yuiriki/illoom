import React from 'react';
import Section1Component from './MainComponents/Section1Component';
import Section2Component from './MainComponents/Section2Component';
import Section3Component from './MainComponents/Section3Component';
import Section4Component from './MainComponents/Section4Component';
import Section5Component from './MainComponents/Section5Component';
import Section6Component from './MainComponents/Section6Component';
import Section7Component from './MainComponents/Section7Component';
import Section8Component from './MainComponents/Section8Component';



const MainComponent = () => {
    return (
      <main id='main'>
        <Section1Component/>
        <Section2Component/>
        <Section3Component/>
        <Section4Component/>
        <Section5Component/>
        <Section6Component/>
        <Section7Component/>
        <Section8Component/>
      </main>
    );
};

export default MainComponent;