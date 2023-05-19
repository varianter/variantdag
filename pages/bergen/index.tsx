import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { getVarriantdayByCity } from 'src/functions/getFolderAndFiles';

export const getStaticProps: GetStaticProps = async () => {
  let variantdays = null;

  variantdays = await getVarriantdayByCity('bergen');

  return {
    props: {
      variantdays: variantdays,
    },
  };
};

const Oslo: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  variantdays,
}) => {
  return (
    <div>
      <h1>Variantdager for Bergen</h1>
      <ul>
        {variantdays &&
          variantdays.map((day: string) => {
            return (
              <li key={day}>
                <Link href={`/bergen/${day}`}>{day}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Oslo;
