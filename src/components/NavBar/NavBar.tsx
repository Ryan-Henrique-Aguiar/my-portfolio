import { AppBar, MenuItem, styled, Toolbar } from '@mui/material'


export default function NavBar(){

  const Styledtoobar = styled(Toolbar)(({}) => ({
        display:"flex",
        justifyContent:"space-evenly"
        }));
  

  const handleSmoothScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
      
    }
  }

  return (
    <>
      
      <AppBar position="absolute">
        <Styledtoobar>
        <MenuItem onClick={()=> handleSmoothScroll("about")}>About</MenuItem>
        <MenuItem onClick={()=> handleSmoothScroll("skills")} >Skills</MenuItem>
        <MenuItem onClick={()=> handleSmoothScroll("projects")}>Projects</MenuItem>
        </Styledtoobar>
      </AppBar>
      
    </>
  )
}

