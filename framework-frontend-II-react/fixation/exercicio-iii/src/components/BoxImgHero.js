/*--------- Imports Libs and Other ---------*/
import { React, useState } from 'react';

/*--------- CSS imports ----------*/
import './BoxImgHero.css';
import { Container, Button, Stack } from '@mui/material';

/*---------- Component ----------*/
/**
 * Component BoxImgHero
 * 
 * @returns {JSX} Return JSX
 */
export default function BoxImgHero({name, arrayImg})
{
    const [imgPath, setImgPath] = useState('');

    const displayImg = (path) => {
        setImgPath(path)
    };

    const clean = () => {
        setImgPath('');
    };

    return(
        <Container className='container' key={name}>
            <h2>{name}</h2>
            <p>Formas</p>

            <Stack spacing={2} direction="row">
                {arrayImg.map((paths, index) => {
                    return(
                        <Button
                            key={name}
                            variant="contained"
                            onClick={() => displayImg(paths)}
                        >
                            Forma {index+1}
                        </Button>
                    );
                })}

                <Button variant="contained" onClick={() => clean()}>
                    Clean
                </Button>
            </Stack>

            <img src={imgPath} /> 
        </Container>
    );
}//enc BoxImgHero()