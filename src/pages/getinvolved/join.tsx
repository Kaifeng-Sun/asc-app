import React from "react";
import PageTitle from "@/src/components/Template/PageTitle";
import { Button, Box, Center, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { Document, Page, pdfjs } from 'react-pdf';

const App = () => {
  
    // Function will execute on click of button
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('AISA_Membership_Form.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'AISA_Membership_Form.pdf';
                alink.click();
            })
        })
    }
    return (
        <>
            <PageTitle title="How to join" />
            <Box h="300px">
            <Center>
                <Grid templateColumns="repeat(2, 1fr)" gap={5}>
                <GridItem w="100%">
                    <Text
                    fontSize="2xl"
                    maxH="300px"
                    overflowY={{ base: "scroll", sm: "scroll", md: "visible" }}
                    > <br/>
                    You can join by completing AISA’s membership form and pay the nominal
                    joining fee and the ongoing membership fee.
                    <br/> <br/>
                        Membership Form attached:
                    </Text>
                    <br/>
                    <Button bg="#52a8de" color="white" border="1px" onClick={onButtonClick}>
                    Click to Download Form
                    </Button>
                </GridItem>
                <GridItem w="100%">
                    <Image alt="" src="/aisalogo.png" maxH="300px" />
                </GridItem>
                </Grid>
            </Center>
            </Box>
        </>
    );
};
  
  export default App;