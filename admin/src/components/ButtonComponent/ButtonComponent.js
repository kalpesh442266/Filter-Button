/*
 *
 * HomePage
 *
 */
import { Box, Button } from '@strapi/design-system';
import React from 'react';
import { useHistory } from "react-router-dom";
import { useCMEditViewDataManager } from '@strapi/helper-plugin';


const ButtonComponent = ({ name }) => {
    const history = useHistory();
    const {
        allLayoutData,
        modifiedData
    } = useCMEditViewDataManager();

    const { uid } = allLayoutData.contentType;
    const currentCollection = CONTENT_TYPES?.filter(data => { if (data?.from === uid && data?.attributeName === name) return data })[0]

    const filterCards = () => {
        history.push(`/content-manager/collectionType/${currentCollection?.to}?page=1&pageSize=10&sort=${currentCollection?.filterBy}:ASC&filters[$and][0][${currentCollection?.manyToMany ? currentCollection?.from?.split('.')[1] + 's' : currentCollection?.from?.split('.')[1]}][${currentCollection?.filterBy}][$eq]=${modifiedData?.title}`)
    }

    return (
        <>
            <Box paddingTop={5} style={{ width: '100%' }}>
                <Button style={{ margin: 'auto' }} size="L" variant="default" onClick={filterCards}>
                    {currentCollection?.buttonTitle || "View"}
                </Button>
            </Box>
        </>
    );
};

export default ButtonComponent;
