import { styled } from "@mui/material/styles";
import Avatar from "../../../../assets/images/eu.jpeg";
import {Box, Container, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import {AnimatedBackGroundClouds} from "../../../../components/animatedBackground/AnimatedBackgroundClouds";
import { AnimatedBackground } from "../../../../components/animatedBackground/AnimatedBackground";


const Hero = () =>{
    
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        position:"relative",
        display:'flex',
        alignItems:"center",
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
                    <Box position={'relative'} alignItems={"center"}>
                                <Box position={'absolute'} zIndex={0} width={'100%'} top={170} right={0} >
                                    <AnimatedBackGroundClouds></AnimatedBackGroundClouds>
                                </Box>
                                
                            </Box>
                    <Grid container spacing={2}>
                        
                        <Grid size={{xs:12,md:5}} >

                            <Box position="relative" pb={3}>
                                <Box width={"150%"} position="absolute" top={-100} right={0}>
                                    <AnimatedBackground />
                                </Box>
                                <Box textAlign="center" position={'relative'}>
                                    <StyledImg src={Avatar} />
                                </Box>
                            </Box>
                            
                            
                        </Grid>
                        
                        <Grid size={{xs:12,md:7}} position={"relative"}>
                            <Typography color="primary.contrastText" variant="h1" textAlign={"center"} paddingBlock={2}>Ryan Henrique Aguiar</Typography>
                            <Typography color="primary.contrastText"variant="h2" textAlign={"center"} paddingBlock={3} >Estudante de Sistemas de Informação</Typography>
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