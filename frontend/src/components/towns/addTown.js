import React from 'react';
import './addTown.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
        root: {
            minWidth: 275,
        }
    })
);

export default function AddTown() {

    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Link to="/towns">
                    <Button variant="contained" color="primary">
                        <ArrowBackIcon />Back
                    </Button>
                </Link>
                <Card className="formCard">
                    <CardContent>
                        <Typography variant="h5" gutterBottom>Add Town</Typography>
                        <hr/>
                        <form noValidate autoComplete="off">
                            <div>
                                <TextField id="town_name" label="Town Name" variant="outlined" fullWidth size="small" />
                            </div>
                            <div>
                                <TextField id="country_name" label="Country Name" variant="outlined" fullWidth size="small" />
                            </div>
                            <div>
                                <TextField id="country_code" label="Country Code" variant="outlined" fullWidth size="small" />
                            </div>
                            <div>
                                <TextField id="country_iso_code" label="Country Code(ISO)" variant="outlined" fullWidth size="small" />
                            </div>
                            <div>
                                <Button variant="contained" color="primary" className="submit">Submit</Button>
                                <Button variant="contained" color="secondary" className="reset">Reset</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    );
}