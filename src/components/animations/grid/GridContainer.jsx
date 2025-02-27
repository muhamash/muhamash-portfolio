"use client"

import Squares from './Grid';

export default function GridContainer() {
    return (
        <Squares
            speed={ 0.7 }
            squareSize={ 40 }
            direction='diagonal' // up, down, left, right, diagonal
            borderColor='#fff'
            hoverFillColor='#92a1a2'
        />
    );
}
