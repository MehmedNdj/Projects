import React, { useState, useEffect, useRef } from 'react';
import './CreatePlaylist.css'
import Creatordiv from './Creatordiv';
import add from './assets/add.png'

function Creator2() {

    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        // Function to handle clicks outside the div
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                setIsVisible(false);
            }
        }

        // Bind the event listener
        document.addEventListener('mousedown', handleClickOutside);
        
        // Cleanup
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <div className='creator'>
                    <button className='buttonA' onClick={() => setIsVisible(!isVisible)}>
                        <img src={add} alt='create-playlist' className='add-icon'/> 
                    </button>
            </div>
            {isVisible && (
            <div ref={ref}>
                <Creatordiv />
            </div>
            )}
        </div>
    )
}

export default Creator2;