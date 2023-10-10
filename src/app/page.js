import Image from 'next/image'
import styles from './page.module.css'
import { Perfil } from '../../components/molecules/perfil/Perfil'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Perfil></Perfil>
      </main>
    </>
  )
}
