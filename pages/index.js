import Card from '../components/Card';
import Drawer from '../components/Drawer';
import Link from 'next/link';

const Page = () => {
  return (
    <Card>
      Hello, World
      <Drawer id="Funny stuff!">
        Hi I'm a Drawer!
      </Drawer>
      <Link href="/test-page"><a>Test</a></Link>
    </Card>
  );
};

export default Page;
