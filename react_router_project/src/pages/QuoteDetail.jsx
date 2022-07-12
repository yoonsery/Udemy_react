import { Route, useParams } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetail = () => {
  const param = useParams();
  console.log(param.quoteId);
  return (
    <>
      <h1>Quote Detail Page</h1>
      <p>{param.quoteId}</p>
      <Route path={`/quotes/${param.quoteId}/comments`}>
        {/* <Route path="/quotes/:quoteId/comments"> */} you can also use this
        code
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
