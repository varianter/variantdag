import { Agenda, AgendaDetails } from '@components';
import {
  getAllListId,
  getProgramFromListById,
} from '@components/agenda/utils/trelloApi';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  const ids = await getAllListId();
  const program = await getProgramFromListById(ids[0].id);

  return {
    props: {
      name: ids[0].name,
      program: program,
    },
  };
};

const VariantDay: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  program,
  name,
}) => {
  return (
    <div>
      <h1>{name}</h1>
      <Agenda program={program} />
    </div>
  );
};

export default VariantDay;
