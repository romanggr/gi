// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

// function KimonoModel() {
//   const { scene } = useGLTF("/models/gi.glb");
//   return <primitive object={scene} scale={1} position={[0, -0.5, 0]} />;
// }

// useGLTF.preload("/models/gi.glb");

// export default function ModelPreview3D() {
//   return (
//     <div className="w-full h-[320px] md:h-[420px] rounded-lg border border-gray-200 overflow-hidden bg-slate-900/5">
//       <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
//         {/* Lights */}
//         <ambientLight intensity={0.7} />
//         <directionalLight position={[4, 8, 4]} intensity={1.1} />
//         <Environment preset="city" />

//         <KimonoModel />

//         <OrbitControls
//           enableZoom={false}
//           enablePan={false} // disable moving
//           autoRotate
//           autoRotateSpeed={2}
//           enableDamping={true} // do moving smoother
//         />
//       </Canvas>
//     </div>
//   );
// }
