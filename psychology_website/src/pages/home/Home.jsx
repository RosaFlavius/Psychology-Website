import React from "react";
import Grid from '@mui/material/Grid2';
import './home.styles.css'
import HomePageIntroPhoto from '../../images/HomePageIntro.JPG'
import HomePageBottomIntro1Photo from '../../images/HomePageBottom1.JPG'
import HomePageBottomIntro2Photo from '../../images/HomePageBottom2.JPG'

function Home() {
  return (
    <Grid container className="home-container">
        <Grid size={{ lg: 12}}>
            <Grid container>
                <Grid size= {{ lg: 6, md:6, xs: 12}} className="grid-item-home quote-intro-container">
                    <h1 className="text-with-line-breaks">
                        {`The good life is a process,\nnot a state of being.\nIt is a direction, not a destination.`}
                    </h1>
                    <h4 className="author-text-intro">C. Rogers</h4>
                    <span className="text-with-line-breaks">In today’s ever-changing world, the need to adapt can sometimes cause us to lose touch with ourselves—our emotions, our needs, and others. As a psychologist, my mission is to help you rediscover that connection to yourself while empowering you to navigate life’s challenges with more confidence and clarity.</span>
                </Grid>
                <Grid size= {{ lg: 6, md:6, xs: 12}} className="grid-item-home-intro home-image-container">
                    <img src={HomePageIntroPhoto} alt="HomePageIntroPhoto" className="home-intro-photo"/>
                </Grid>
            </Grid>
        </Grid>
        <Grid style={{ width: '100%' }} size={{ lg: 12 }} className="grid-item-home pallet-changer">
            <h1>What can I help you with?</h1>
        </Grid>
        <Grid size={{ lg: 12 }}>
            <Grid container>
                <Grid size={{ lg:4, md: 4, sm:6, xs: 12}} className="grid-item-home">
                    <h1>Anxiety</h1>
                    <span className="text-with-line-breaks">You often feel nervous and insecure and want to explore where those feelings come from while learning how to stay connected with yourself and others.</span>
                </Grid>
                <Grid size={{ lg:4, md: 4, sm:6, xs: 12}} className="grid-item-home pallet-changer-white">
                        <h1>Stress</h1>
                        <span className="text-with-line-breaks">You find it challenging to identify your emotions and feel at ease within your own body, often feeling disconnected from your own self. </span>
                </Grid>
                <Grid size={{ lg:4, md: 4, sm:6, xs: 12}} className="grid-item-home">
                    <h1>Low Self-esteem</h1>
                    <span className="text-with-line-breaks">You want to discover how to navigate stress and challenging situations with ease while staying true to yourself.</span>
                </Grid>
                <Grid size={{ lg:4, md: 4, sm:6, xs: 12}} className="grid-item-home pallet-changer-white">
                    <h1>Relationships</h1>
                    <span className="text-with-line-breaks">You feel disconnected from your partner, family, or friends, often facing conflicts and misunderstandings. You want to learn how to create and maintain meaningful, lasting and relationships.</span>
                </Grid>
                <Grid size={{ lg:4, md: 4, sm:6, xs: 12}} className="grid-item-home">
                    <h1>Adaptation</h1>
                    <span className="text-with-line-breaks">You moved to a new country, and you are struggling to build a new life there while trying to fit in. </span>
                </Grid>
                <Grid size={{ lg:4, md: 4, sm:6, xs: 12}} className="grid-item-home pallet-changer-white">
                    <h1>Disconnection</h1>
                    <span className="text-with-line-breaks">You find it challenging to identify your emotions and feel at ease within your own body, often feeling disconnected from your own self. </span>
                </Grid>
            </Grid>
        </Grid>
        <Grid size={{ lg: 12 }}>
            <Grid container>
                <Grid size={{ lg:4, md: 4, sm:12, xs: 12}} className="grid-item-home-intro">
                    <img src={HomePageBottomIntro1Photo} alt="HomePageIntroPhoto" className="home-intro-photo"/>
                </Grid>
                <Grid size={{ lg:4, md: 4, sm:6, xs: 12}} className="grid-item-home pallet-changer-white">
                    <h1 className="text-with-line-breaks">
                        {`“Talk to yourself like you would with to someone you love.”`}
                    </h1>
                    <h4 className="author-text-intro">Brené Brown</h4>
                </Grid>
                <Grid size={{ lg:4, md: 4, sm:6, xs: 12}} className="grid-item-home-intro">
                    <img src={HomePageBottomIntro2Photo} alt="HomePageIntroPhoto" className="home-intro-photo"/>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
  );
}

export default Home;