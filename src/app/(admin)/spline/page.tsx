"use client";
import { useRef } from 'react';
import Spline from '@splinetool/react-spline';

// Define the type for the object that will be stored in the ref
type SplineObject = {
  name: string;
  id: string;
  position: { x: number; y: number; z: number }; // adjust according to your object properties
  // Add any other properties that the object might have
};

export default function SplinePage() {

//   const cube = useRef<SplineObject | null>(null); // Specify that the ref will be a SplineObject or null

//   function onLoad(spline: any) {
//     const obj = spline.findObjectByName('Cube');
//     // or
//     // const obj = spline.findObjectById('8E8C2DDD-18B6-4C54-861D-7ED2519DE20E');

//     // save it in a ref for later use
//     cube.current = obj;
//   }

//   function moveObj() {
//     if (cube.current) {
//       console.log(cube.current); // Spline Object => { name: 'Cube', id: '8E8C2DDD-18B6-4C54-861D-7ED2519DE20E', position: {}, ... }

//       // move the object in 3D space
//       cube.current.position.x += 10;
//     }
//   }

  return (
    <div>
      <Spline
        scene="https://prod.spline.design/ChTibSpqFhjI3IUd/scene.splinecode"
        // onLoad={onLoad}
      />
      {/* <button type="button" onClick={moveObj}>
        Move Cube
      </button> */}
    </div>
  );
}
