import styled from "@emotion/styled"
import Avatar from "../../../../assets/images/eu.jpeg"
import { Button, Container, Grid, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


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
                <Container>
                    <Grid container spacing={2}>
                        <Grid size={4}>
                            <StyledImg src = {Avatar}></StyledImg>
                        </Grid>
                        <Grid size={8}>
                            <Typography color="primary" variant="h1" textAlign={"center"}>Ryan Henrique Aguiar</Typography>
                            <Typography color="primary"variant="h2" textAlign={"center"} >Estudante de Sistemas de Informação</Typography>
                            <Button>
                                <DownloadIcon/>
                                DOWNLOAD CV</Button>
                            <Button>
                                <EmailIcon/>
                                CONTACT ME</Button>
                        </Grid>
                        </Grid>
                </Container>
            </StyledHero>
        </>
    )
}
export default Hero