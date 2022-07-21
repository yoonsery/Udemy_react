import {
  Link,
  Route,
  Routes,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

import HighlightedQuote from '../components/quotes/HighlightedQuote';
import { getSingleQuote } from '../lib/api';
import Comments from '../components/comments/Comments';
import useHttp from '../hooks/use-http';
import { useEffect } from 'react';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const QuoteDetail = () => {
  const params = useParams();
  const match = useRouteMatch();

  const { quoteId } = params; // 🔥 destructuring을 해서 useEffect 의 dependancy에 params 전체를 추가할 필요가 없다!! params가 여러개일때 예상치 못하게 렌더되는 부작용을 막을 수 있음

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === 'pending') {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === 'error') {
    return <p className="centered ">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found 🤔</p>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route
          path={`${match.path}/*`} // relative라서 현재 있는 위치의 url은 지워준다..
          element={
            <div className="centered">
              <Link className="btn--flat" to="comments">
                Load Comments
              </Link>
            </div>
          }
        />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </>
  );
};

export default QuoteDetail;
