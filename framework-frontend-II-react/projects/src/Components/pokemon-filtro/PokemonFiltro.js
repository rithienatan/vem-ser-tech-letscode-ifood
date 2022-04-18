/*----------- Libs and Others ----------*/
import { React, useState } from "react";
import PropTypes from "prop-types";


/*---------- CSSs ----------*/
import "./PokemonFiltro.css";
import { Box, Container, Chip, Tabs, Tab, Stack } from "@mui/material";


/*---------- TabPanel Auxiliar Component ----------*/
/**
 * TabPanel aux component
 * 
 * @param {any} props 
 * @returns {JSX.Element}
 */
function TabPanel(props)
{
    const { children, value, index, ...other } = props;

    return(
        <Container disableGutters
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </Container>
    );
}//end TabPanel()

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


/*---------- allyProps auxiliar function ----------*/
/**
 * ally props function 
 * 
 * @param {number} index - tab index
 * @returns object
 */
function allyProps(index)
{
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}//end allyProps()


/*----------- Component PokemonFiltro ----------*/
/**
 * Component Pokemon Filtro List
 * 
 * @param {Object[]} filtro
 * @param {Object} pokemon
 * @param {Array} pokeList
 * @param {Function} updatePokemonList
 * @param {Function} updateLog
 * 
 * @returns {JSX.Element}
 */
export default function PokemonFiltro({ filters, pokemon, pokeList, updatePokemonList, updateLog })
{
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const updatePokeList = (attribute, element) => {
        let newList = [];

        if(attribute === "types")
        {
            let indexAttribute = pokemon.types.findIndex(el => el === element);

            if(indexAttribute !== -1)
            {
                newList = pokeList.filter((el) => {
                    return el.types[indexAttribute] === element;
                });

                updatePokemonList(newList);
                updateLog(`is type ${element}!`);
            }
            else
            { updateLog(`is not type ${element}!`); }
        }
        else if(attribute === "color")
        {
            if(pokemon.color === element)
            {
                newList = pokeList.filter((el) => {
                    return el.color === element;
                });

                updatePokemonList(newList);
                updateLog(`is color ${element}!`);
            }
            else
            { updateLog(`is not color ${element}!`); }
        }
        else if(attribute === "generation")
        {
            if(pokemon.generation === element)
            {
                newList = pokeList.filter((el) => {
                    return el.generation === element;
                });

                updatePokemonList(newList);
                updateLog(`is from ${element}!`);
            }
            else
            { updateLog(`is not from ${element}!`); }
        }
        else if(attribute === "habitat")
        {
            if(pokemon.habitat === element)
            {
                newList = pokeList.filter((el) => {
                    return el.habitat === element;
                });

                updatePokemonList(newList);
                updateLog(`lives in ${element}!`);
            }
            else
            { updateLog(`is not lives in ${element}!`); }
        }
        else if(attribute === "isLegendary")
        {
            if(pokemon.isLegendary === element)
            {
                newList = pokeList.filter((el) => {
                    return el.isLegendary === element;
                });

                updatePokemonList(newList);
                updateLog(`is legendary!`);
            }
            else
            { updateLog(`is not legendary!`); }
        }
        else
        {
            if(pokemon.shape === element)
            {
                newList = pokeList.filter((el) => {
                    return el.shape === element;
                });

                updatePokemonList(newList);
                updateLog(`shape is ${element}!`);
            }
            else
            { updateLog(`is not shape ${element}!`); }
        }//end if
    };


    return(
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab sx={{ color: "#FFEBC6" }} label="Tipos" {...allyProps(0)} />
                    <Tab sx={{ color: "#FFEBC6" }} label="Cor" {...allyProps(1)} />
                    <Tab sx={{ color: "#FFEBC6" }} label="Geração" {...allyProps(2)} />
                    <Tab sx={{ color: "#FFEBC6" }} label="Habitat" {...allyProps(3)} />
                    <Tab sx={{ color: "#FFEBC6" }} label="Lendário" {...allyProps(4)} />
                    <Tab sx={{ color: "#FFEBC6" }} label="Shape" {...allyProps(5)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                <Stack direction="row" spacing={1}>
                    {filters.types.map((element, index) => {
                        return(
                            <Chip 
                                key={index}
                                label={element} 
                                color="secondary"
                                sx={{ color: "#FFEBC6" }}
                                clickable
                                onClick={() => updatePokeList("types", element)}
                            />
                        );
                    })}
                </Stack>
            </TabPanel>

            <TabPanel value={value} index={1}>
                <Stack direction="row" spacing={1}>
                    {filters.color.map((element, index) => {
                        return(
                            <Chip 
                                key={index}
                                label={element} 
                                color="secondary"
                                sx={{ color: "#FFEBC6" }}
                                clickable
                                onClick={() => updatePokeList("color", element)}
                            />
                        );
                    })}
                </Stack>
            </TabPanel>

            <TabPanel value={value} index={2}>
                <Stack direction="row" spacing={1}>
                    {filters.generation.map((element, index) => {
                        return(
                            <Chip 
                                key={index}
                                label={element}
                                color="secondary" 
                                sx={{ color: "#FFEBC6" }}
                                clickable
                                onClick={() => updatePokeList("generation", element)}
                            />
                        );
                    })}
                </Stack>
            </TabPanel>

            <TabPanel value={value} index={3}>
                <Stack direction="row" spacing={1}>
                    {filters.habitat.map((element, index) => {
                        return(
                            <Chip 
                                key={index}
                                label={element} 
                                color="secondary"
                                sx={{ color: "#FFEBC6" }}
                                clickable
                                onClick={() => updatePokeList("habitat", element)}
                            />
                        );
                    })}
                </Stack>
            </TabPanel>

            <TabPanel value={value} index={4}>
                <Stack direction="row" spacing={1}>
                    {filters.isLegendary.map((element, index) => {
                        return(
                            <Chip 
                                key={index}
                                label={element ? "Lendário" : "Não Lendário"} 
                                color="secondary"
                                sx={{ color: "#FFEBC6" }}
                                clickable
                                onClick={() => updatePokeList("isLegendary", element)}
                            />
                        );
                    })}
                </Stack>
            </TabPanel>

            <TabPanel value={value} index={5}>
                <Stack direction="row" spacing={1}>
                    {filters.shape.map((element, index) => {
                        return(
                            <Chip 
                                key={index}
                                label={element} 
                                color="secondary"
                                sx={{ color: "#FFEBC6" }}
                                clickable
                                onClick={() => updatePokeList("shape", element)}
                            />
                        );
                    })}
                </Stack>
            </TabPanel>
        </Box>
    );
}//end PokemonFiltro()