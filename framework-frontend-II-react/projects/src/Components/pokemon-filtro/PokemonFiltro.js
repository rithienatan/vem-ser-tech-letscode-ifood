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
 * 
 * @returns {JSX.Element}
 */
export default function PokemonFiltro({ filters })
{
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="Tipos" {...allyProps(0)} />
                    <Tab label="Cor" {...allyProps(1)} />
                    <Tab label="Geração" {...allyProps(2)} />
                    <Tab label="Habitat" {...allyProps(3)} />
                    <Tab label="Lendário" {...allyProps(4)} />
                    <Tab label="Shape" {...allyProps(5)} />
                </Tabs>
            </Box>

            <TabPanel value={value} index={0}>
                <Stack direction="row" spacing={1}>
                    {filters.types.map((element, index) => {
                        return(
                            <Chip 
                                key={index}
                                label={element} 
                                onClick={() => null}
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
                                onClick={() => null}
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
                                onClick={() => null}
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
                                onClick={() => null}
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
                                onClick={() => null}
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
                                onClick={() => null}
                            />
                        );
                    })}
                </Stack>
            </TabPanel>
        </Box>
    );
}//end PokemonFiltro()