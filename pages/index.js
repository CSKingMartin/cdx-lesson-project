import Card from '../components/Card';
import Link from 'next/link';

const Page = () => {
  return (
    <Card>
      Hello, World
      <Link href="/test-page"><a>Test</a></Link>
    </Card>
  );
};

export default Page;
