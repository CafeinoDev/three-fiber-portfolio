import { Text, Html, ContactShadows, PresentationControls, useGLTF, Environment, Float } from '@react-three/drei'
import { useControls } from 'leva';
import { useEffect, useRef } from 'react';
import useWindowSize from '../hooks/useWindowsSize';

const Experience = () =>
{

    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf');

    const windowSize = useWindowSize();
    const textRef = useRef();
    const laptopRef = useRef();

    useEffect(() => {
        const isMobile = windowSize.width <= 768;


        if(isMobile){
            textRef.current.position.set(0.4, 1, -0.6);
            textRef.current.rotation.y = - 0.5;
            textRef.current.fontSize = 0.40;

            laptopRef.current.scale.set(0.5, 0.5, 0.5);
            laptopRef.current.position.x = 0.3;
        }                
    }, [windowSize])
    

    return <>
        <color args={ ['#241a1a'] } attach="background" />


        
        <Environment preset="city"/>


        <PresentationControls global
            rotation={ [0.13, 0.1, 0] }
            polar={ [-0.4, 0.2] }
            azimuth={ [ -1, 0.75 ] }
            config={
                {
                    mass: 2,
                    tension: 400
                }
            }
            snap={{
                mass: 4,
                tension: 400
            }}
        >
            <Float
                rotationIntensity={ 0.4 }
                >
                <rectAreaLight 
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 65 }
                    color={ '#ffb1b1' }
                    rotation={ [ -0.1, Math.PI, 0 ] }
                    position={ [0, 0.55, -1.15] }
                />
                <primitive object={ computer.scene }  
                    position-y={ -1.2 }
                    ref={ laptopRef }
                >
                    <Html
                        transform
                        wrapperClass='htmlScreen'
                        distanceFactor={ 1.17 }
                        position={[ 0, 1.56, -1.4 ]}
                        rotation-x={ -0.256 }
                    >
                        <iframe src="https://andyalvarado.com/" />
                    </Html>
                </primitive>

                <Text
                    ref={ textRef }
                    font='./bangers-v20-latin-regular.woff'
                    fontSize={ .75 }
                    position={ [1.4, 0.75, 0.75] }
                    rotation-y={ -1.25 }
                    maxWidth={ 2 }
                    textAlign='center'
                >
                    ANDY ALVARADO
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows 
            position-y={ -1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 2.4 }
        />
    </>
}

export default Experience;