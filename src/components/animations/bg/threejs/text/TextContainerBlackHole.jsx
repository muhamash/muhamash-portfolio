"use client"

import { useState } from 'react';
import AnimatedBackground from './Text';

export default function TextContainerBlackHole() {
  const [text, setText] = useState('Hire me\n Right now!!');
  
  return (
    <div className='relative'>
      <AnimatedBackground text={text} textSize={16} 
          particleSize={1.2}/>
    </div>
  );
}