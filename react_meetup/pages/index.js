import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';

function HomePage(props) {
  return (
    <>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="To make meetup page to practice React & nextJS"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// ✨ If you have a data that changes multiple times every second, getServerSideProps are better
// 🤔 Need to wait for the page to be generated on every incoming request

// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;

//   // fetch data from an API or a file system

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// ✨ If you don't need to the request object(eg. authentication) getStaticProps is better choice than getServerSideProps.
//  faster than regenerating & fetching data for every incoming request

export async function getStaticProps() {
  // fetch data from an API

  const client = await MongoClient.connect(
    `mongodb+srv://yoonsery:${process.env.REACT_APP_MONGODB_PASSWORD}@cluster0.wb3vgzu.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10, // 초단위로 설정
  };
}

export default HomePage;
