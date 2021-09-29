import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    padding: '0.5rem',
  },
  spacer: {
    flexGrow: 1,
  },
  body: {
    padding: '0.5rem',
    flexGrow: 1,
  },
});

const widgetNames: any = {
  a: 'Line Chart',
  b: 'Area Chart',
  c: 'Bar Chart',
  d: 'Scatter Chart',
};

interface WidgetProps {
  id: string;
  onRemoveItem: (name: string) => void;
  component: any;
}

export default function Widget(props: WidgetProps) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <Typography variant='h6' gutterBottom>
          {widgetNames[props.id]}
        </Typography>
        <div className={classes.spacer} />
        <IconButton aria-label='delete' onClick={() => props.onRemoveItem(props.id)}>
          <CloseIcon fontSize='small' />
        </IconButton>
      </div>
      <div className={classes.body}>
        <props.component />
      </div>
    </Card>
  );
}
