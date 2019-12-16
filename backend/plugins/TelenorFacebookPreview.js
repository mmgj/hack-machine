import React, { useEffect } from 'react';
import Prism from './prism/prism';
import './prism/prism.css';
import './prism/prism-monokai.css';

const renderCode = ({
  ogTitle,
  ogSiteName,
  ogUrl,
  ogDescription,
  ogImageUrl,
}) => `<meta property="og:title" content="${ogTitle}" />
<meta property="og:site_name" content="${ogSiteName}" />
<meta property="og:url" content="${ogUrl}" />
<meta property="og:description" content="${ogDescription}" />
<meta property="og:image" content="${ogImageUrl}" />
<meta property="og:image:width" content="1160" />
<meta property="og:image:height" content="560" />
<meta property="og:type" content="article" />
`;

function TelenorFacebookPreview({ options, document }) {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <div style={{ padding: 15 }}>
      <pre style={{ padding: 20 }}>
        <code className="language-html">{renderCode(document.displayed)}</code>
      </pre>
    </div>
  );
}

export default TelenorFacebookPreview;
