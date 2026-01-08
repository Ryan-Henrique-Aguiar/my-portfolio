import { styled } from "@mui/material/styles";
import Avatar from "../../../../assets/images/eu.jpeg";
import {Container, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";


const Hero = () =>{
    
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display:'flex',
        alignItems:"center  "
        }));

    const StyledImg = styled("img")({
        width: "80%",
        borderRadius: "50%",
        border:`1px solid ${theme.palette.secondary.main}`
        });

    return(
        <>
            <StyledHero>
                <Container maxWidth = 'lg'>
                    <Grid container spacing={2}>
                        <Grid size={{xs:12,md:5}} >
                            <StyledImg src = {Avatar}></StyledImg>
                            
                        </Grid>
                        <Grid size={{xs:12,md:7}}>
                            <Typography color="primary.contrastText" variant="h1" textAlign={"center"}>Ryan Henrique Aguiar</Typography>
                            <Typography color="primary"variant="h2" textAlign={"center"} >Estudante de Sistemas de Informação</Typography>
                            <Grid container display={'flex'} justifyContent={'center'} spacing={3}>
                                <Grid size={{xs:12, md:4}} display={'flex'} justifyContent={'center'} >
                                        <StyledButton>
                                            <DownloadIcon/>
                                            <Typography>
                                                DOWNLOAD CV
                                            </Typography>
                                            
                                        </StyledButton>
                                    
    
                                </Grid>

                                <Grid size={{xs:12, md:4}} display={'flex'} justifyContent={'center'}>
                                        <StyledButton>
                                            <EmailIcon/>
                                            <Typography>
                                                CONTACT ME
                                            </Typography>
                                        
                                       </StyledButton>
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