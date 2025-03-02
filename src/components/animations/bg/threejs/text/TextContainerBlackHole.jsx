"use client"

import { useState } from 'react';
import AnimatedBackground from './Text';

export default function TextContainerBlackHole() {
  const [text, setText] = useState('FUTURE\nIS NOW');
  
  return (
    <div className='relative h-screen w-screen'>
      <AnimatedBackground text={text} textSize={16} 
          particleSize={1.2}/>
    
    </div>
  );
}