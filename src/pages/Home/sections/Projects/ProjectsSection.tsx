import { Box, Container, Grid, Typography, styled } from "@mui/material";
import ProjectCard, { type ProjectCardProps } from "../../../../components/ProjectCard/ProjectCard";
import AnimationComponent from "../../../../components/AnimationComponent/AnimationComponent";
import probabilidadeChuvaIMG from "../../../../assets/images/project-probabilidadedechuva.jpg"
import imunegestaoIMG from "../../../../assets/images/project-imunegestao.jpg"
import letrixIMG from "../../../../assets/images/project-letrix.jpg"

const ProjectsSection: React.FC = () => {

    const StyledExperience = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        marginTop: "-40px",
        paddingTop:theme.spacing(6),
        paddingBottom: theme.spacing(6),

    }));

    const projects = [
        {
            title: "Probabilidade de Chuva",
            subtitle: "Dez 2025",
            srcImg: probabilidadeChuvaIMG,
            description: "Sistema que processa arquivos CSV históricos fornecidos pelo Instituto Nacional de Meteorologia (INMET) calcula a média e distribuição binomial de todos os dados da cidade e retorna a probabilidade de um intervalo de dias e do ano inteiro",
            technologies: "Technologies: Java, TypeScript, React, SpringBoot, Recharts, Vite",
            codeURL: "https://github.com/Ryan-Henrique-Aguiar/probabilidade-chuva-api",
        },
        {
            title: "ImuneGestão",
            subtitle: "2025",
            srcImg: imunegestaoIMG,
            description: "Sistema de gestão para vacinção de pacientes, agendamento e notificação por email. (Projeto 2º lugar FaiTec 2025)",
            technologies: "Technologies: Java, JavaFX, SceneBuilder, SpringBoot(Somente para notificação)",
            codeURL: "https://github.com/Ryan-Henrique-Aguiar/GestaoImune",
        },
        {
            title: "Letrix",
            subtitle: "2024",
            srcImg: letrixIMG,
            description: "Jogo de descoberta de palavras. (Projeto 2º lugar FaiTec 2024)",
            technologies: "Technologies: Python, Pygame",
            codeURL: "https://github.com/Ryan-Henrique-Aguiar/Letrix",
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