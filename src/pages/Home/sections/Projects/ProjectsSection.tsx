import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,

    }));

    const projects = [
        {
            title: "Probabilidade de Chuva",
            subtitle: "Dez 2025",
            srcImg: "/src/assets/images/project-probabilidadechuva.JPG",
            description: "Sistema que processa arquivos CSV históricos fornecidos pelo Instituto Nacional de Meteorologia (INMET) calcula a média e distribuição binomial de todos os dados da cidade e retorna a probabilidade de um intervalo de dias e do ano inteiro",
            technologies: "Technologies: Java, TypeScript, React, SpringBoot, Recharts, Vite",
            websiteURL: "",
            codeURL: "https://github.com/Ryan-Henrique-Aguiar/probabilidade-chuva-api",
        },
    ]

    return (
        <StyledExperience>
            <Container maxWidth="lg">
                <Box id="projects" pt={5} pb={3}>
                    <Typography variant="h2" textAlign="center" color="primary.contrastText">Projects</Typography>
                </Box>
                <Grid container spacing={5} pb={3}>
                    {projects.map((project: ProjectCardProps, index: number) => (
                        <Grid size = {{md:6}} key={index}>
                            <AnimationComponent moveDirection={index % 2 == 0 ? "right" : "left"}>
                                <ProjectCard
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    srcImg={project.srcImg}
                                    description={project.description}
                                    technologies={project.technologies}
                                    websiteURL={project.websiteURL}
                                    codeURL={project.codeURL}
                                />
                            </AnimationComponent>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledExperience>
    )
}

export default ProjectsSection