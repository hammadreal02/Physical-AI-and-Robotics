import React, { useState, useEffect } from 'react';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface GazeboCodeExampleProps {
  path: string;
  urdfFile: string;
  spawnFile: string;
  testFile: string;
}

const GazeboCodeExample: React.FC<GazeboCodeExampleProps> = ({ path, urdfFile, spawnFile, testFile }) => {
  const { siteConfig } = useDocusaurusContext();
  const [urdfCode, setUrdfCode] = useState('');
  const [spawnCode, setSpawnCode] = useState('');
  const [testCode, setTestCode] = useState('');
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

    fetchCode(urdfFile, setUrdfCode);
    fetchCode(spawnFile, setSpawnCode);
    fetchCode(testFile, setTestCode);
  }, [path, urdfFile, spawnFile, testFile, siteConfig.baseUrl]);

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div>
      <Tabs groupId="gazebo-example-files">
        <TabItem value="urdf" label={urdfFile} default>
          {urdfCode ? (
            <CodeBlock language="xml" title={urdfFile}>
              {urdfCode}
            </CodeBlock>
          ) : (
            <div>Loading URDF code...</div>
          )}
        </TabItem>
        <TabItem value="spawn" label={spawnFile}>
          {spawnCode ? (
            <CodeBlock language="python" title={spawnFile}>
              {spawnCode}
            </CodeBlock>
          ) : (
            <div>Loading spawn script code...</div>
          )}
        </TabItem>
        <TabItem value="test" label={testFile}>
          {testCode ? (
            <CodeBlock language="python" title={testFile}>
              {testCode}
            </CodeBlock>
          ) : (
            <div>Loading test script code...</div>
          )}
        </TabItem>
      </Tabs>
    </div>
  );
};

export default GazeboCodeExample;