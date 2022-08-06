import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://images.unsplash.com/photo-1553604503-1ea63c3ba69c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1275&q=80"
      title="A First Meetup"
      address="Prague, Czechia"
      description="This is a first meetup!"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://images.unsplash.com/photo-1553604503-1ea63c3ba69c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1275&q=80',
        id: 'm1',
        title: 'A First Meetup',
        address: 'Prague, Czechia',
        description: 'This is a first meetup!',
      },
    },
  };
}

export default MeetupDetails;
