import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from '@material-ui/core/IconButton';
import Popover from '@material-ui/core/Popover';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  popup: {
    padding: theme.spacing(2),
  },
}));

const widgetNames: any = {
  a: 'Line Chart',
  b: 'Area Chart',
  c: 'Bar Chart',
  d: 'Scatter Chart',
};

interface AddListProps {
  items: any;
  onRemoveItem: (name: string) => void;
  onAddItem: (name: string) => void;
  originalItems: any[];
}

export default function AddList(props: AddListProps) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleChange = (e: any) => {
    if (e.target.checked) {
      props.onAddItem(e.target.name);
    } else {
      props.onRemoveItem(e.target.name);
    }
  };

  return (
    <>
      <IconButton aria-label='add' onClick={handleClick} aria-describedby={id}>
        <AddCircleOutlineIcon />
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <div className={classes.popup}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Select Widgets</FormLabel>
            <FormGroup>
              {props.originalItems.map((i) => (
                <FormControlLabel
                  control={
                    <Checkbox checked={props.items.includes(i)} onChange={handleChange} name={i} />
                  }
                  label={widgetNames[i]}
                  key={i}
                />
              ))}
            </FormGroup>
          </FormControl>
        </div>
      </Popover>
    </>
  );
}
