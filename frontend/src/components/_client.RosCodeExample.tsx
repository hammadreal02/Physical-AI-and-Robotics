import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface RosCodeExampleProps {
  path: string;
  publisherFile: string;
  subscriberFile: string;
}

const RosCodeExample: React.FC<RosCodeExampleProps> = ({ path, publisherFile, subscriberFile }) => {
  const { siteConfig } = useDocusaurusContext();
  const [publisherCode, setPublisherCode] = useState('');
  const [subscriberCode, setSubscriberCode] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCode = async (file: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
      try {
        const response = await fetch(`${siteConfig.baseUrl}examples/${path}/${file}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        setter(text);
      } catch (e) {
        setError(`Failed to load code from ${file}: ${(e as Error).message}`);
        console.error(e);
      }
    };

    fetchCode(publisherFile, setPublisherCode);
    fetchCode(subscriberFile, setSubscriberCode);
  }, [path, publisherFile, subscriberFile, siteConfig.baseUrl]);

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div>
      <Tabs groupId="ros-example-files">
        <TabItem value="publisher" label={publisherFile} default>
          {publisherCode ? (
            <CodeBlock language="python" title={publisherFile}>
              {publisherCode}
            </CodeBlock>
          ) : (
            <div>Loading publisher code...</div>
          )}
        </TabItem>
        <TabItem value="subscriber" label={subscriberFile}>
          {subscriberCode ? (
            <CodeBlock language="python" title={subscriberFile}>
              {subscriberCode}
            </CodeBlock>
          ) : (
            <div>Loading subscriber code...</div>
          )}
        </TabItem>
      </Tabs>
    </div>
  );
};

export default RosCodeExample;
