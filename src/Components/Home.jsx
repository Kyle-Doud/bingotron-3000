import { Grid } from '@mui/joy';
import Item from '@mui/joy/Grid';

const bingo = 'BINGO'.split('');
const categories = 'this 25 word list represents the categories of a bingo game 12 FREE 14 15 16 17 18 19 20 21 22 23 24 25'.split(' ');
const fullGridText = bingo.concat(categories);
export default function Home() {
  return <Grid container spacing={2}>
    {fullGridText.map(text => {
      return (<Grid xs={2.4}>
        <Item>{text}</Item>
      </Grid>)
    })}
  </Grid>
}