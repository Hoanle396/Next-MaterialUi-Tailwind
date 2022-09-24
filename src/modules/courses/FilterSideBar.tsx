import { Box, Button, Divider, Grid, Stack, Switch, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { FlexBox } from '../../components/FlexBox';

interface Props { }
const FilterSideBar: FC<Props> = () => {
   return (
      <FlexBox flexDirection="row" className='max-h-screen h-screen'>
         <Box flex={1} sx={{ my: 3, px: 5 }}>
            <Stack direction="row" justifyContent="space-between">
               <Typography variant="body1">Filters</Typography>
               <Typography variant="body1">Clear All </Typography>
            </Stack>
            <Divider sx={{ my: 1 }} />
            <Typography variant="h5" sx={{ my: 3 }}>Courses</Typography>
            <Stack direction="row" justifyContent="space-between">
               <Typography>IT</Typography>
               <Switch size='small' defaultChecked />
            </Stack>
            <Stack direction="row" justifyContent="space-between">
               <Typography>3D</Typography>
               <Switch size='small' />
            </Stack>
            <Stack direction="row" justifyContent="space-between">
               <Typography>AI</Typography>
               <Switch size='small' />
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h5" sx={{ my: 3 }}>Show type</Typography>
            <Stack direction="row" justifyContent="space-between" spacing={1}>
               <Button size="small" variant='text' fullWidth>ALL</Button>
               <Button size="small" variant='outlined' fullWidth>FEATURED</Button>
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h5" sx={{ my: 3 }}>Price Range</Typography>
            <Typography variant="body2">Equivalent USD Value</Typography>
            <Stack direction="row" justifyContent="space-between" mt={3} spacing={1}>
               <TextField label="Min" fullWidth size='small' name="min" type="number" />
               <TextField label="Max" fullWidth size='small' name="max" type="number" />
            </Stack>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h5" sx={{ my: 3 }}>Artwork type</Typography>
            <Grid container spacing={1}>
               <Grid item xs={4}>
                  <Button size="small" variant='outlined' fullWidth>Image</Button>
               </Grid>
               <Grid item xs={4}>
                  <Button size="small" variant='text' fullWidth>Video</Button>
               </Grid>
               <Grid item xs={4}>
                  <Button size="small" variant='outlined' fullWidth>Sound</Button>
               </Grid>
               <Grid item xs={4}>
                  <Button size="small" variant='text' fullWidth>Other</Button>
               </Grid>
            </Grid>
         </Box>
         <Divider variant='fullWidth' orientation="vertical" />
      </FlexBox>
   );
};

export default FilterSideBar;