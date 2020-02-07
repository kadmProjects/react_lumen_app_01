import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    }
});

export default function ShowTown() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Link to="/town/add">
                    <Button variant="contained" color="primary">
                        <AddIcon />Add Town
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}