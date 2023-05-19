import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Link from 'next/link';
import { getVarriantdayByCity } from 'src/functions/getFolderAndFiles';

export const getStaticProps: GetStaticProps = async () => {
  let variantdays = null;

  variantdays = await getVarriantdayByCity('oslo');

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
      <h1>Variantdager for Oslo</h1>
      <ul>
        {variantdays &&
          variantdays.map((day: string) => {
            return (
              <li key={day}>
                <Link href={`/oslo/${day}`}>{day}</Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Oslo;
