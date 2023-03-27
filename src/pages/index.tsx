import HomeLayout from '@cineplex/HomeLayout'
import styles from '@cineplex/styles/Home.module.css'
import { PrismaClient } from '@prisma/client';
import Head from 'next/head'
import Filmes from '../../entities/Filme'
import CardPrincipal from '@cineplex/components/CardPrincipal';

interface Props {
  filmesEmCartaz: Filmes[],
}

export async function getServerSideProps() {
  const db =new PrismaClient();

  let filmes: Filmes[] = await db.fILMES.findMany({
    where: {
      EmCartaz: true
    }
  }) 

  return {
    props: {
      filmesEmCartaz: filmes
    }
  }
}

export default function Home(props: Props) {
  return (
    <>
    <Head>
      <title>Cineplex</title>
      <link rel="shortcut icon" href="1logo.svg" type="image/x-icon" />
    </Head>
      <HomeLayout>
        <CardPrincipal filme={props.filmesEmCartaz[0]} />
      </HomeLayout>
    </>
  )
}
