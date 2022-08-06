import MeetupList from '../components/meetups/MeetupList';
// my-domain.com/

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://images.unsplash.com/photo-1553604503-1ea63c3ba69c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1275&q=80',
    address: 'Prague, Czechia',
    description: 'This is a first meetup!',
  },
  {
    id: 'm2',
    title: 'A Second Meetup',
    image:
      'https://images.unsplash.com/photo-1565611487608-281f9c0cafb0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    address: 'Rotterdam, Netherlands',
    description: 'This is a second meetup!',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
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
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 3600, // 초단위로 설정하므로 1시간
  };
}

export default HomePage;
