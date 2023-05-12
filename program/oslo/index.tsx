import { useRouter } from 'next/dist/client/router';

const Oslo = () => {
  const { asPath } = useRouter();
  // Get the date slug from the path
  const date = asPath.split('/').pop();
  return (
    <div>
      {date}
      test
    </div>
  );
};

export default Oslo;
