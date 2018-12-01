// import React from 'react'
// import { Link } from 'gatsby'
import { Grid, Cell } from "styled-css-grid";
import Layout from '../components/layout'

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

const IndexPage = () => (
<div>
  <div>
    <Layout>
    </Layout>
    <Grid columns={"repeat(auto-fit,minmax(425px,1fr))"} gap="0px" columnGap="0px" rowGap="0px" flow="row">
       <Cell height={1}>
         <img src={image11} alt="Kriziate1"/>
       </Cell>
       <Cell height={1}>
         <img src={image12} alt="Kriziate2"/>
       </Cell>
       <Cell height={1}>
         <img src={image13} alt="Kriziate3"/>
       </Cell>
       <Cell height={1}>
         <img src={image14} alt="Kriziate4"/>
       </Cell>
       <Cell height={1}>
         <img src={image15} alt="Kriziate5"/>
       </Cell>
       <Cell height={1}>
         <img src={image16} alt="Kriziate6"/>
       </Cell>
       <Cell height={1}>
         <img src={image17} alt="Kriziate7"/>
       </Cell>
       <Cell height={1}>
         <img src={image10} alt="Kriziate8"/>
       </Cell>
       <Cell height={1}>
         <img src={image9} alt="Kriziate9"/>
       </Cell>
     </Grid>
  </div>
</div>
)

export default IndexPage
