import React from 'react'
import { Grid } from '@mui/joy';
import Item from '@mui/joy/Grid';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/Modal';
import ModalClose from '@mui/joy/Modal';
import Sheet from '@mui/joy/Sheet';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Stack from '@mui/joy/Stack';
import spaces from "../Constants/spaces.json";


const bingo = 'BINGO'.split('');
const categories = spaces.spaces;
const fullGridText = bingo.concat(categories);
export default function Home() {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Grid container spacing={2}>
        {fullGridText.map((text, index) => {
          return (<Grid xs={2.4} key={text + index}>
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
        <h1>some text</h1>
          {/* <DialogTitle>Create new project</DialogTitle>
          <DialogContent>Fill in the information of the project.</DialogContent> */}
          {/* <form
            onSubmit={(event) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input autoFocus required />
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input required />
              </FormControl>
              <Button type="submit">Submit</Button>
            </Stack>
          </form> */}
        </ModalDialog>
      </Modal>
    </>)
}