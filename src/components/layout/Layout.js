import * as React from 'react';

import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Footer2 from './Footer2';
import Header from './headerMusic';

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);


  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `ViaDelWeb Bio Link`}/>
      <main className="text-gray-900">{children}</main>
      <Footer2 />
    </>
  );
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;

