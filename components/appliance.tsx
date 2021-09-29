import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },
});

export interface Appliance {
  title: string;
  image: string;
  discription: string;
}

interface Props {
  appliance: Appliance;
}

export default function ApplianceCard(props: Props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component='img'
          alt={props.appliance.title}
          height='250'
          image={props.appliance.image}
          title={props.appliance.title}
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            {props.appliance.title}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.appliance.discription}
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size='small' color='primary'>
          Share
        </Button>
        <Button size='small' color='primary'>
          Learn More
        </Button>
      </CardActions> */}
    </Card>
  );
}
