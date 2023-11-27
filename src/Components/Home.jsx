import React from 'react'
import { Grid } from '@mui/joy';
import Item from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/Modal';
import ModalClose from '@mui/joy/Modal';


const bingo = 'BINGO'.split('');
const categories = 'this 25 word list represents the categories of a bingo game 12 FREE 14 15 16 17 18 19 20 21 22 23 24 25'.split(' ');
const fullGridText = bingo.concat(categories);
export default function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <Grid container spacing={2}>
        {fullGridText.map(text => {
          return (<Grid xs={2.4}>
            <Item>
              <Card variant="outlined" onClick={() => setOpen(true)}> 
                <CardContent>
                  <Typography>{text}</Typography>
                </CardContent>
              </Card>
            </Item>
          </Grid>)
        })}
      </Grid>
      <Modal 
        open={open}
        onClose={() => setOpen(false)}>
        <ModalDialog>
          <ModalClose />
          <Typography>Modal title</Typography>
        </ModalDialog>
      </Modal>
    </div>)
}