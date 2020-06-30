import React from 'react';
import { StyledButton } from './Instrument.styled';
import soundfile from '../../Sounds/boom'

function playsound(e) {
    console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (audio) {
        console.log(audio)
    }
    else {
        console.log("deze toets is niet gekoppeld")
    }
}

const Instrument = (props) => {
    { window.addEventListener('keydown', playsound) }
    console.log(soundfile)
    return (
        <StyledButton id={props.id}>
            <p>{props.name}</p>
            <audio data-key={props.button} src={props.path}></audio>
        </ StyledButton>
    )
}
export default Instrument;



