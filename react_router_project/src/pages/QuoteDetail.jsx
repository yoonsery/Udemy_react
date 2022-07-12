import { useParams } from 'react-router-dom';

const QuoteDetail = () => {
  const param = useParams();
  console.log(param.quoteId);
  return <h1>Quote Detail Page {param.quoteId}</h1>;
};

export default QuoteDetail;
