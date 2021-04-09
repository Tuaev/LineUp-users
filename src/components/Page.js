import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// Container to handle titles and other react-helmet features
const Page = ({ title = 'Line-Up', children }) => {
  return (
    <div>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Page;
