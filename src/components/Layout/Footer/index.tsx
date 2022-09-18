import { Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import styles from './footer.module.scss';
const Footer = () => {
   return (
      <footer className={styles.footer}>
         <Grid container pt={2} spacing={2}>
            <Grid item lg={3} sm={6} xs={12}
               mb={{ md: 0, sm: 4 }}
               display="flex"
               justifyContent="center"
               alignItems="center"
               flexDirection="column"
            >
               <h1 className={`${styles.logo} text-5xl font-bold`}>iEdu</h1>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}
               mb={{ md: 0, sm: 4 }}
               display="flex"
               justifyContent="center"
               alignItems="center"
               flexDirection="column"
            >
               <Typography variant='h5' color="secondary" className={styles.option}>Page</Typography>
               <List>
                  <ListItem>
                     <ListItemText
                        primary="Footer Item"
                     />
                  </ListItem>
               </List>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}
               mb={{ md: 0, sm: 4 }}
               display="flex"
               justifyContent="center"
               alignItems="center"
               flexDirection="column"
            >
               <Typography variant='h5' color="secondary" className={styles.option}>Contact</Typography>
               <List>
                  <ListItem>
                     <ListItemText
                        primary="Footer Item"
                     />
                  </ListItem>
               </List>
            </Grid>
            <Grid item lg={3} sm={6} xs={12}
               mb={{ md: 0, sm: 4 }}
               display="flex"
               justifyContent="center"
               alignItems="center"
               flexDirection="column"
            >
               <Typography variant='h5' color="secondary" className={styles.option}>Links</Typography>
               <List>
                  <ListItem>
                     <ListItemText
                        primary="Footer Item"
                     />
                  </ListItem>
               </List>
            </Grid>
         </Grid>

         <Grid container mt={4} className={styles.copyright}>
            <Grid item sm={12} display='flex' flexDirection="column" alignItems='center'>
               <small className='block fs-6 text-center'>
                  VIETNAM-KOREA UNIVERSITY OF INFORMATIONAND COMMUNICATION TECHNOLOGY{' '}
               </small>{' '}
               <br />
               <small className='block fs-6'>2021 &copy; All Rights Reserved.</small>
            </Grid>
         </Grid>
      </footer >
   )
}

export default Footer;