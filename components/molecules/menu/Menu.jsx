import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
import styles from "./Menus.module.css";
import Button from '@mui/material/Button';
// import MenuIcon from "@mui/icons-material/Menu";

export const MenuMain= () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={styles.containerMenu}>
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        <Button color="inherit" sx={{ marginRight: 2 }}>Experiencia</Button>
                        <Button  color="inherit" sx={{ marginRight: 2 }}>Proyectos</Button>
                        <Button  color="inherit" sx={{ marginRight: 2 }}>Tecnologías</Button>
                        <Button  color="inherit" sx={{ marginRight: 2 }}>Formación</Button>
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
