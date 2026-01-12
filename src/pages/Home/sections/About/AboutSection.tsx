import { Box, Card, Container, Grid, styled, Typography } from "@mui/material";

import SchoolIcon from '@mui/icons-material/School';
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const AboutSection: React.FC = () => {

    const StyledAbout = styled("div")(() => ({
        backgroundColor:'white',

    }));

    const StyledCard = styled(Card)(({ theme }) => ({
        padding: "10px 10px",
        textAlign: "center",
        marginBottom: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        }
    }));

    const skillsSet = [
        "Java", "Typescript", "React", "Next", "Git", "HTML", "CSS", "Insmomnia", "Material UI", "Figma"
    ]

    return (
        <>
        <StyledAbout>
            <Container maxWidth="lg">
                <Box id="about" pt={5} mb={3}>
                    <Typography variant="h3" textAlign="center" >About me</Typography>
                </Box>
                <Grid container spacing={2} display="flex" justifyContent="center" pb={3}>
                    
                    <Grid size={{xs:9,md:2.5}}>
                        <AnimationComponent moveDirection="left">
                            <StyledCard variant="outlined">
                                <SchoolIcon />
                                <Typography textAlign="center" fontWeight={600}>Education</Typography>
                                <Typography textAlign="center">Graduando</Typography>
                                <Typography textAlign="center">Sistemas de Informação</Typography>
                            </StyledCard>
                        </AnimationComponent>

                    </Grid>
                </Grid>
                <Box pb={1}>
                    <Typography variant="h4" textAlign="center">
                        Cursando 5º período de Sistemas de Informação na FAI (Centro de Ensino Superior em Gestão, Tecnologia e Educação FAI)
                    </Typography>
                </Box>
                <hr />
                <Box id="skills" pt={1} mb={3}>
                    <Typography variant="h3" textAlign="center" fontWeight={300}>Skills</Typography>
                </Box>
                <Box mb={5}>
                    <Grid  container spacing={3} justifyContent="center">
                        {skillsSet.map((skill, index) => (
                            <Grid key={index} size ={{xs:5,sm:4,md:2,lg:2}}>
                                <StyledCard variant="outlined">
                                    {skill}
                                </StyledCard>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>
        </StyledAbout>
        </>
    )
}

export default AboutSection