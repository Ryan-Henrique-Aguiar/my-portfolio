import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/eu.jpeg"
import { Button, Container, createTheme, Grid, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});


const Hero = () =>{
    
    const StyledHero = styled("div")(()=>({
        backgroundColor: "black",
        height:"100vh"
    }))
    const StyledImg= styled("img")(()=>({
       width:"100%",
       borderRadius:"50%"
    }))

    return(
        <>
            <StyledHero>
                <Container maxWidth = 'lg'>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12,md:4}} >
                            <StyledImg src = {Avatar}></StyledImg>
                            
                        </Grid>
                        <Grid size={{xs:12,md:8}}>
                            <Typography color="primary" variant="h1" textAlign={"center"}>Ryan Henrique Aguiar</Typography>
                            <Typography color="primary"variant="h2" textAlign={"center"} >Estudante de Sistemas de Informação</Typography>
                            <Grid container display={'flex'} justifyContent={'center'}>
                                <Grid size={{xs:12, md:4}} display={'flex'} justifyContent={'center'} >
                                        <Button>
                                    <DownloadIcon/>
                                    DOWNLOAD CV
                                        </Button>
                                </Grid>

                                <Grid size={{xs:12, md:4}} display={'flex'} justifyContent={'center'}>
                                        <Button>
                                    <EmailIcon/>
                                    CONTACT ME
                                        </Button>
                                </Grid>
                                
                                
                            </Grid>
                            
                        </Grid>
                        </Grid>

                        
                </Container>
            </StyledHero>
        </>
    )
}
export default Hero