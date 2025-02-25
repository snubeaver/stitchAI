import { Gnb } from '@/components/gnb';

import * as style from './style.css';

export default async function Page() {
  return (
    <main className={style.main}>
      <Gnb type="app" />
      <div className={style.content}>
        <div className={style.title}>Knowledge Hub</div>
      </div>
      <div className={style.comingSoon}>Coming Soon</div>
    </main>
  );
}
