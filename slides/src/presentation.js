// Import React
import React from 'react';
import styled from 'styled-components';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fill,
  Image,
  Appear,
  S
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const images = {
  briami: require('./assets/briami.jpg'),
  cornMaze: require('./assets/corn_maze.png'),
  clients: require('./assets/clients.png'),
  hs2: require('./assets/hs2.png'),
  switchedLogo: require('./assets/switched_on_pop.png'),
  switchedEp: require('./assets/switched_ep.png'),
  spreadsheet: require('./assets/spreadsheet.png'),
  driesnote: require('./assets/driesnote.jpg'),
  react: require('./assets/react.jpg'),
  d8: require('./assets/d8.png'),
  reactIcon: require('./assets/react_icon.png'),
  flowChart: require('./assets/flowchart-full.jpg'),
};

const albums = {
  commonSense: require('./assets/albums/common_sense.jpeg')
};

// Todo - preload images. See utils in specatcle repo.
// preloader(images);

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const CustomListItem = styled(ListItem)`
  font-size: 4rem !important;
  margin-bottom: 1.5rem;
  color: white;
`;

const CustomText = styled(Text)`
  font-size: 4rem !important;
  margin-bottom: 1.5rem !important;
  color: white !important;
`;

// Todo - start splitting slides out into sections/components.

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        controls={false}
        progress="bar"
        contentHeight="97vh"
        contentWidth="95vw"
      >
        <Slide
          bgColor="secondary"
          notes="These are notes"
        >
          <Heading fit textColor="tertiary">HOT JAMS(tack)</Heading>
          <Heading fit caps textColor="primary">Building a Music Discovery App with Drupal and React</Heading>
        </Slide>

        <Slide
          bgColor="secondary"
          notes="This is the time I forced my 6 yr old son to run 3 miles in the pouring
          rain. Dad of the year contender right here."
        >
          <Layout>
            <Fill>
              <Heading size={1} caps textColor="tertiary">Brian Perry</Heading>
              <List>
                <CustomListItem>Interactive Developer at HS2 Solutions</CustomListItem>
                <CustomListItem>Rocking the Chicago suburbs</CustomListItem>
                <CustomListItem>Lover of all things components</CustomListItem>
                <CustomListItem>... and Nintendo</CustomListItem>
              </List>
              <CustomText>d.o: brianperry</CustomText>
              <CustomText>twitter: bricomedy</CustomText>
              <CustomText>github: backlineint</CustomText>
              <CustomText>nintendo: wabrian</CustomText>
            </Fill>
            <Fill>
              <Image
                bgImage={images.cornMaze}
                height="94vh"
                width="50vw"
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide
          bgColor="secondary"
          notes="We focus on digital transformation. I didn't have time to sync up
          with marketing, but I'm pretty sure that is what happens when a car turns into a giant robot.
          Then standard stuff about great Drupal, great Drupal people."
        >
          <Layout>
            <Fill>
              <Heading caps size={1} textColor="tertiary">HS2 Solutions</Heading>
              <Image
                src={images.clients}
                margin="50px"
              />
            </Fill>
            <Fill>
              <Image
                bgImage={images.hs2}
                height="94vh"
                width="50vw"
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide
          bgColor="secondary"
          notes="It's a little bit of a walk, but let me tell you how I fell into
          the project we're going to be talking about...
          Todo - maybe re-theme to album quote concept. Or maybe that is two slides."
        >
          <Heading size={1} fit caps textColor="tertiary">Origin of a</Heading>
          <Heading size={1} fit caps textColor="primary">Side Project</Heading>
        </Slide>

        <Slide
          bgImage={images.briami}
          notes="I used to do comedy, but like many comedians I secretly wanted to be in a band.
          This is me performing my solo musical show Briami Sound Machine which even though
          it often led to walkouts, I secretly wanted to be the greatest frontman of all time.
          One of the comedians I collaborated with in Boston was a friend named Chris Duffy..."
        ></Slide>

        <Slide
          bgColor="#f2385a"
          notes="Chris went to college with one of the guys behind the podcast Switched On Pop.
          It breaks down popular music in amazing music nerd detail.  Super cool stuff.
          One episode featured guest Rob Mitchum talking about the album of the year list,
          which is this big ugly google spreadsheet...
          todo - style padding between images."
        >
          <Image
            src={images.switchedLogo}
            width="50%"
          />
          <Appear>
            <Image
              src={images.switchedEp}
              width="70%"
            />
          </Appear>
        </Slide>

        <Slide
          bgImage={images.spreadsheet}
          notes="... where he takes all off the music critics best of lists and aggregates them
          into one best-of-best-of list crowning an undeniable critical darling.
          Sure, spreasheets are ugly, but a lot of love and data goes into this one.
          different averages, a calculated score for consensus, metadata about the albums
          and lists, and so on. So in the back of my mind (and deep in my evernote) I
          really wanted to use this awesome dataset for something fun."
        >
        </Slide>

        <Slide
          bgImage={images.driesnote}
          bgDarken={0.75}
          notes="Meanwhile in the Drupal communtity I'm hearing decoupled, decoupled,
          decoupled and had been looking for a good way to learn more"
        >
          <Appear>
            <Heading size={1} caps fit textColor="primary">
              Decoupled
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps fit textColor="tertiary">
              Progressively Decoupled
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps fit textColor="primary">
              Fully Decoupled
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps fit textColor="tertiary">
              We don't say 'headless' anymore
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps fit textColor="primary">
              Decoupled
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps fit textColor="tertiary">
              Decoupled decoupled decoupled decoupled
            </Heading>
          </Appear>
        </Slide>

        <Slide
          bgImage={images.react}
          bgDarken={0.25}
          notes="In JS Framework-vile I'm hearing React, React, React. Some people
          are shouting Vue too, but man, so much React"
        >
          <Appear>
            <Heading size={1} caps fit textColor="tertiary">
              React
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps fit textColor="primary">
              React and Redux
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps fit textColor="tertiary">
              I'm sure vue is great but...
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps fit textColor="primary">
              So many people are talking about react
            </Heading>
          </Appear>
          <Appear>
            <Heading size={1} caps fit textColor="tertiary">
              React react react react react react
            </Heading>
          </Appear>
        </Slide>

        <Slide
          bgColor="secondary"
          notes="Seemed like a great opportunity to jam all of these things together
          and see what I could learn about this whole decoupled Drupal thing."
        >
          <Layout>
            <Fill>
              <Heading caps>Data</Heading>
              <Image src={images.spreadsheet} />
            </Fill>
            <Fill>
              <Heading caps>Drupal</Heading>
              <Image src={images.d8} />
            </Fill>
            <Fill>
              <Heading caps>React</Heading>
              <Image src={images.reactIcon} />
            </Fill>
          </Layout>
          <Heading textColor="primary">Let's Jam (them all together)</Heading>
        </Slide>

        <Slide
          bgColor="secondary"
          notes=""
        >
          <Heading textColor="secondary" bgColor="tertiary" padding="15px">Choosing a Decoupled Architecture</Heading>
          <Layout>
            <Fill>
              <BlockQuote>
                <Quote>Don't think I'm shy 'cause I'm quiet</Quote>
                <Quote>I'm just plottin', I'm plottin'</Quote>
                <Quote>I got dem where I want dem</Quote>
                <Cite>J Hus - Plottin</Cite>
              </BlockQuote>
            </Fill>
            <Fill>
              <Image src={albums.commonSense} />
            </Fill>
          </Layout>
        </Slide>

        <Slide
          bgColor="secondary"
          notes="Here are the flavors, so how do we decide what is right for us."
        >
          <Heading textColor="tertiary">
            The Flavors
          </Heading>
          <List>
            <CustomListItem><S type="bold" textColor="tertiary">Fully Coupled</S> - All Drupal all the time, baby</CustomListItem>
            <Appear><CustomListItem><S type="bold" textColor="tertiary">Progressively Decoupled</S> - Drupal with strategically sprinkled JavaScript flavor</CustomListItem></Appear>
            <Appear><CustomListItem><S type="bold" textColor="tertiary">Fully Coupled</S> - JS framework of choice is in control and communicates with Drupal as necessary for content</CustomListItem></Appear>
          </List>
        </Slide>

        <Slide
          bgColor="secondary"
          notes="Holy flow chart."
        >
          <Image src={images.flowChart} />
        </Slide>

        <Slide>
          Zoom into top part of flow chart.
        </Slide>

        <Slide>
          Zoom into bottom part of flow chart.
        </Slide>

        <Slide
          notes="Props are external forces acting on a component. Like your mom
          buying you a halloween costume.  You're going to be a ghost. Here's all
          the stuff you need to be a ghost. Cool.  I'm a ghost now."
        >
          Props and state slide.  Way in the future.
        </Slide>

        <Slide
          notes="State what the component knows to be true about itself. Like how
          in high school I thought I was a punk rock kid, even though I lived in Cranston
          Rhode Island. You might give me other props, but until I decide otherwise
          I'm still a punk rock kid. Slide of me with crazy hair.  (I still contend
          that the ska-punk scene in Providence was really great btw.)"
        >
          State
        </Slide>

        <Slide>
          <Text>Remaining slides are from boilerplate</Text>
        </Slide>

        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Spectacle Boilerplate
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            open the presentation/index.js file to get started
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
