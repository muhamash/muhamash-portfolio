"use client"

import Squares from './Grid';

export default function GridContainer() {
    return (
        <Squares
            speed={ 0.9 }
            squareSize={ 40 }
            direction='diagonal' // up, down, left, right, diagonal
            borderColor='#fff'
            hoverFillColor='#222'
        />
    );
}
