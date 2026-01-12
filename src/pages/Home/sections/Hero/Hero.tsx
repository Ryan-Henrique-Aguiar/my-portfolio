import { styled } from "@mui/material/styles";
import Avatar from "../../../../assets/images/eu.jpeg";
import {Box, Container, Grid, Typography } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import {AnimatedBackGroundClouds} from "../../../../components/animatedBackground/AnimatedBackgroundClouds";
import { AnimatedBackground } from "../../../../components/animatedBackground/AnimatedBackground";
import CV from "../../../../assets/pdfs/Curriculo - Ryan Henrique Aguiar.pdf"



const Hero = () =>{
    
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        position:"relative",
        display:'flex',
        alignItems:"center",
        [theme.breakpoints.up('xs')]:{ //<= Mobile
            paddingTop:"250px",
            
            
        },
        /**[theme.breakpoints.up('md')]:{ //>= Mobile
            
        }**/

        }));

    const StyledImg = styled("img")({
        width: "80%",
        borderRadius: "50%",
        border:`1px solid ${theme.palette.secondary.main}`
        });

    const handleDownload = () => {
        console.log("download")

        const link = document.createElement('a')
        link.href = CV
        link.download = 'Curriculo - Ryan Henrique Aguiar.pdf'
        document.body.appendChild(link)
        link.click();
        document.body.removeChild(link)
    }
    const handleWhatsApp = () =>{
        const phoneNumber =  '5535998270245';
        const message = 'Hello ! I saw your profile'

        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappLink, '_blank');
    }

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
                                        <StyledButton onClick={()=> handleDownload()}>
                                            <DownloadIcon/>
                                            <Typography>
                                                DOWNLOAD CV
                                            </Typography>
                                            
                                        </StyledButton>
                                    
    
                                </Grid>
                                
                                <Grid size={{xs:12, md:4}} display={'flex'} justifyContent={'center'}>
                                        <StyledButton onClick={() => handleWhatsApp()}>
                                            <WhatsAppIcon/>
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