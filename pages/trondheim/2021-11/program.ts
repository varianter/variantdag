import { Program } from '@components/agenda/types/program';
import { Theme } from '@components/agenda/types/theme';

export const program: Program = {
  from: '07:45',
  to: '11:30',
  features: [
    {
      title: 'Kaffe og mingling',
      from: '07:45',
      to: '08:00',
      venue: 'Amfiet',
      theme: Theme.PAUSE,
    },
    {
      title: 'Velkommen',
      from: '08:15',
      to: '09:00',
      venue: 'Amfiet',
      theme: Theme.FELLES,
      description:
        'Hva gjør Malin hos SVV? Hva skal de oppnå i prosjekt(ene)? Hvilke utfordringer møter hun på vegen og hvordan arbeider teamet for å overkomme disse utfordringene?',
    },
    {
      title: 'Hvordan gjør kunde fornøyd når man sier ting de ikke vil høre?',
      from: '09:30',
      to: '11:30',
      venue: 'Amfiet',
      theme: Theme.SKUDD,
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti est odit tenetur quis.',
    },
    {
      title:
        'Workshop om mye spennende opplegg som skal beskrives med veldig, veldig, veldig mange ord.',
      from: '09:30',
      to: '10:00',
      venue: 'Torsken',
      theme: Theme.LÆRE,
      description:
        'Deleniti est odit tenetur quis, beatae harum doloribus aperiam quisquam ipsa eum nihil magni eaque rerum, eveniet accusantium totam distinctio saepe cupiditate? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti est odit tenetur quis, beatae harum doloribus aperiam quisquam ipsa eum nihil magni eaque rerum, eveniet accusantium totam distinctio saepe cupiditate?',
    },
    {
      title: 'Egenarbeid',
      from: '10:00',
      to: '11:30',
      venue: 'Torsken',
      theme: Theme.ANNET,
      description:
        'Avsatt tid til å lære nye ting. Det kan for eksempel være å jobbe med presentasjoner til Variantdager eller lærekvelder. Skrive bloggposter eller jobbe med interne prosjekter.',
    },
  ],
  rows: [
    {
      title: 'Pause',
      from: '08:00',
      to: '08:15',
      theme: Theme.PAUSE,
    },
    {
      title: 'Wienerbrød og kaffe',
      from: '09:00',
      to: '09:30',
      theme: Theme.PAUSE,
    },
  ],
};
