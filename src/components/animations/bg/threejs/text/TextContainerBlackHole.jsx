"use client"

import { useState } from 'react';
import TextParticles from './Text';

export default function TextContainerBlackHole() {
  const [text, setText] = useState('FUTURE\nIS NOW');
  
  return (
    <div className='overflow-hidden'>
      <TextParticles text={text} fontClassName="font-arsenal"/>
    
    </div>
  );
}