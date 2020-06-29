import React, { useState } from 'react';
// material ui
import { Button, Card, CardActions, CardContent, Dialog, DialogContent, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TabIcon from '@material-ui/icons/Tab';
import CodeIcon from '@material-ui/icons/Code';
import projectList from '../utils/projectList';

const useStyles = makeStyles((theme) => ({
    // project tile/card styling
    button: {
        padding: "unset"
    },
    imageWrapper: {
        opacity: 0.4,
        '&:hover': {
            opacity: 1,
        },
    },
    image: {
        height: 400, 
        width: 400,
        maxHeight: "100%",
        maxWidth: "100%",
    },
    // dialog styling
    dialogImage: {
        height: 500,
        width: 500,
        maxHeight: "100%",
        maxWidth: "100%",
        [theme.breakpoints.down('md')]: {
            height: 450,
            width: 450,
        },
        [theme.breakpoints.down('sm')]: {
            height: 400,
            width: 400,
        },
    },
    card: {
        height: "100%",
    },
    bold: {
        fontWeight: "bold"
    },
    description: {
        height: "300px",
        whiteSpace: "pre-line",
        overflowY: "auto",
        [theme.breakpoints.down('md')]: {
            fontSize: "0.8rem"
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: "0.75rem"
        },
    }
}));

function ProjectCard(props) {
    const classes = useStyles(props);
    const project = projectList[props.projectName];
    const [open, setOpen] = useState(true);

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <div>
            <Button color="secondary" className={classes.button} onClick={() => handleOpen()}>
                <Paper elevation={3} className={classes.imageWrapper}>
                    <img src={project.logoUrl} alt="logo" className={classes.image}/>
                </Paper>
            </Button>
            <Dialog
                fullWidth
                maxWidth="md"
                open={open}
                className={classes.dialog}
                onClose={() => handleClose()}
            >
                <DialogContent>
                    <Grid container alignItems="center">
                        <Grid item xs={6}>
                            <img src={project.logoUrl} alt="logo" className={classes.dialogImage}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Card style={{ backgroundColor: "#404040" }} className={classes.card}>
                                <CardContent>
                                    <Typography variant="h5" color="secondary" className={classes.bold}>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="subtitle2" align="center">
                                        {project.technologies.join(" | ")}
                                    </Typography>
                                    <Typography variant="h6" color="secondary" className={classes.bold}>
                                        About
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" className={classes.description}>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button 
                                        href={project.demoUrl}
                                        target='_blank'
                                        variant="outlined" 
                                        color="secondary"
                                        size="large"
                                        style={{ border: '2px solid' }}
                                        startIcon={<TabIcon/>}
                                    >
                                        Demo
                                    </Button>
                                    <Button 
                                        href={project.codeUrl}
                                        target='_blank'
                                        variant="outlined" 
                                        color="secondary"
                                        size="large"
                                        style={{ border: '2px solid' }}
                                        startIcon={<CodeIcon/>}
                                    >
                                        Code
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default ProjectCard;
