import { Box, Button, Divider, Grid, Stack, Switch, TextField, Typography } from '@mui/material';
import { FC } from 'react';
import { FlexBox } from '../../components/FlexBox';
import StyledSideBar from '../../components/SideBar';
import { useToggle } from '../../hooks/useToggle';

interface Props { }
const FilterSideBar: FC<Props> = () => {
   const [open, toggleOpen] = useToggle(false);
   return (
      <>
         <Box
            className={open ? 'hidden' : 'block'}
            sx={{
               cursor: 'pointer',
               position: "fixed",
               height: 150,
               zIndex: 1999,
               top: "45%",
               display: 'flex',
               alignItems: 'center',
               paddingBottom: 3,
               paddingTop: 3,
               borderRight: 1,
               borderTopRightRadius: 50,
               borderBottomRightRadius: 50,
            }}
            onClick={toggleOpen} >
            <Typography variant="body1" sx={{ writingMode: 'vertical-lr' }}>Show Filters</Typography>
         </Box>
         <StyledSideBar anchor="left" open={open} toggleOpen={toggleOpen}>
            <Box style={{ position: 'relative', height: '100%' }}>
               <Box
                  sx={{
                     cursor: 'pointer',
                     position: "absolute",
                     height: 150,
                     top: "45%",
                     right: 13,
                     display: 'flex',
                     alignItems: 'center',
                     paddingBottom: 3,
                     paddingTop: 3,
                     borderLeft: 1,
                     borderTopLeftRadius: 50,
                     borderBottomLeftRadius: 50,
                  }}
                  onClick={toggleOpen} >
                  <Typography variant="body1" sx={{ writingMode: 'vertical-lr' }}>Hide Filters</Typography>
               </Box>
               <FlexBox flexDirection="column" sx={{ p: 5, height: '100%', overflowY: 'scroll', scrollbarWidth: 'none' }}>
                  <Box flex={1} sx={{ my: 3 }}>
                     <Stack direction="row" justifyContent="space-between">
                        <Typography variant="body1">Filters</Typography>
                        <Typography variant="body1">Clear All </Typography>
                     </Stack>
                     <Divider sx={{ my: 1 }} />
                     <Typography variant="h5" sx={{ my: 3 }}>Chains</Typography>
                     <Stack direction="row" justifyContent="space-between">
                        <Typography>Ethereum</Typography>
                        <Switch size='small' defaultChecked />
                     </Stack>
                     <Stack direction="row" justifyContent="space-between">
                        <Typography>Polygon</Typography>
                        <Switch size='small' />
                     </Stack>
                     <Stack direction="row" justifyContent="space-between">
                        <Typography>BSC</Typography>
                        <Switch size='small' />
                     </Stack>
                     <Divider sx={{ my: 2 }} />
                     <Typography variant="h5" sx={{ my: 3 }}>ERC type</Typography>
                     <Stack direction="row" justifyContent="space-between" spacing={1}>
                        <Button size="small" variant='outlined' fullWidth>ERC721</Button>
                        <Button size="small" variant='text' fullWidth>ERC1155</Button>
                     </Stack>
                     <Divider sx={{ my: 2 }} />
                     <Typography variant="h5" sx={{ my: 3 }}>Show type</Typography>
                     <Stack direction="row" justifyContent="space-between" spacing={1}>
                        <Button size="small" variant='text' fullWidth>All</Button>
                        <Button size="small" variant='outlined' fullWidth>Featured</Button>
                     </Stack>
                     <Divider sx={{ my: 2 }} />
                     <Typography variant="h5" sx={{ my: 3 }}>Token</Typography>
                     <Grid container spacing={1}>
                        <Grid item xs={4}>
                           <Button size="small" variant='text' fullWidth>XP</Button>
                        </Grid>
                        <Grid item xs={4}>
                           <Button size="small" variant='outlined' fullWidth>WETH</Button>
                        </Grid>
                        <Grid item xs={4}>
                           <Button size="small" variant='outlined' fullWidth>USDT</Button>
                        </Grid>
                        <Grid item xs={4}>
                           <Button size="small" variant='outlined' fullWidth>ETH</Button>
                        </Grid>
                        <Grid item xs={4}>
                           <Button size="small" variant='text' fullWidth>BUSD</Button>
                        </Grid>
                        <Grid item xs={4}>
                           <Button size="small" variant='outlined' fullWidth>BND</Button>
                        </Grid>
                     </Grid>
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
                  <Box sx={{ py: 3 }}></Box>
               </FlexBox>
            </Box>
         </StyledSideBar>
      </>
   );
};

export default FilterSideBar;