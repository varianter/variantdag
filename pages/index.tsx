import { Link } from '@components';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { getAllCities } from 'src/functions/getVariantdag';

export const getStaticProps: GetStaticProps = async () => {
  const folders = await getAllCities();
  return {
    props: {
      folders: folders,
    },
  };
};

const Index: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  folders,
}) => {
  return (
    <div>
      <h1>Variantdager</h1>
      {folders.map((folder: string) => {
        return (
          <div key={btoa(folder)}>
            <Link href={`/${folder}`}>
              <h2>{folder}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Index;
