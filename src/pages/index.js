// import React from 'react'
// import { Link } from 'gatsby'
import { Grid, Cell } from "styled-css-grid";
import Layout from '../components/layout'

// import image1 from '../images/adult-attractive-beard-1080243.jpg'
// import image2 from '../images/accessories-afro-beautiful-935985.jpg'
// import image3 from '../images/adult-attractive-beautiful-906052.jpg'
// import image4 from '../images/adult-beard-cellphone-935993.jpg'
// import image7 from '../images/attractive-beautiful-cute-371160.jpg'
// import image8 from '../images/beach-beard-boy-1121796.jpg'
import image9 from '../images/holger-link-748321-unsplash.jpg'
import image10 from '../images/sharon-pittaway-98257-unsplash.jpg'
import image11 from '../images/758-BAMIYAN-CULTURAL-CENTER-05_project副本.jpg'
import image12 from '../images/arch-hadi.jpg'
import image13 from '../images/arch-palm.jpg'
import image14 from '../images/arch-wong.jpg'
import image15 from '../images/dcmetro.jpg'
import image16 from '../images/Morgan-State-Business-SChool-interior-atrium.jpg'
import image17 from '../images/Pau-Iglesias.jpg'
import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import GridList from '@material-ui/core/GridList';
// import GridListTile from '@material-ui/core/GridListTile';
// import tileData from './tileData';

// const styles = theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     width: 2080,
//     height: 2080,
//   },
// });

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
// function IndexPage(props) {
//   const { classes } = props;

//   return (
// <div>
//     <div>
//       <Layout></Layout>
//     </div>
//     <div className={classes.root}>
//       <GridList cellHeight={500} spacing={0} className={classes.gridList} cols={3}>
        
//           <GridListTile key={1} cols={1}>
//             <img src={image9} alt={"image9alt"} />
//           </GridListTile>
//           <GridListTile key={1} cols={1}>
//             <img src={image10} alt={"image10alt"} />
//           </GridListTile>
//           <GridListTile key={1} cols={1}>
//             <img src={image9} alt={"image9alt"} />
//           </GridListTile>
//           <GridListTile key={1} cols={1}>
//             <img src={image10} alt={"image10alt"} />
//           </GridListTile>
//           <GridListTile key={1} cols={1}>
//             <img src={image9} alt={"image9alt"} />
//           </GridListTile>
//           <GridListTile key={1} cols={1}>
//             <img src={image10} alt={"image10alt"} />
//           </GridListTile>
        

//       </GridList>

      
//     </div>
//     </div>
//   );
// }

// IndexPage.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(IndexPage);


const IndexPage = () => (
<div>
  <div>
    <Layout>
    </Layout>
    <Grid columns={"repeat(auto-fit,minmax(425px,1fr))"} gap="0px" columnGap="0px" rowGap="0px" flow="row">
       <Cell height={1}>
         <img src={image11} alt="Kriziate"/>
       </Cell>
       <Cell height={1}>
         <img src={image12} alt="Kriziate"/>
       </Cell>
       <Cell height={1}>
         <img src={image13} alt="Kriziate"/>
       </Cell>
       <Cell height={1}>
         <img src={image14} alt="Kriziate"/>
       </Cell>
       <Cell height={1}>
         <img src={image15} alt="Kriziate"/>
       </Cell>
       <Cell height={1}>
         <img src={image16} alt="Kriziate"/>
       </Cell>
       <Cell height={1}>
         <img src={image17} alt="Kriziate"/>
       </Cell>
       <Cell height={1}>
         <img src={image10} alt="Kriziate"/>
       </Cell>
       <Cell height={1}>
         <img src={image9} alt="Kriziate"/>
       </Cell>
     </Grid>
  </div>
</div>
)

export default IndexPage
