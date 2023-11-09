import {Grid} from '@mui/joy';
import Item from '@mui/joy/Grid';


export default function Home() {
    return <Grid container spacing={2}>
    <Grid xs={8}>
      <Item>xs=8</Item>
    </Grid>
    <Grid xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid xs={4}>
      <Item>xs=4</Item>
    </Grid>
    <Grid xs={8}>
      <Item>xs=8</Item>
    </Grid>
  </Grid>
  }