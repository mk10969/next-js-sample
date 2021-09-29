import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import AddList from './addList';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
}));

interface TopBarProps {
  onLayoutSave: () => void;
  items: any[];
  onRemoveItem: (name: string) => void;
  onAddItem: (name: string) => void;
  originalItems: any[];
}

export default function TopBar(props: TopBarProps) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <AddList
        items={props.items}
        onRemoveItem={props.onRemoveItem}
        onAddItem={props.onAddItem}
        originalItems={props.originalItems}
      />
      <IconButton aria-label='save' onClick={props.onLayoutSave}>
        <SaveIcon />
      </IconButton>
    </Card>
  );
}
