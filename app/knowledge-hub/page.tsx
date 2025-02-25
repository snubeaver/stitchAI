import { Gnb } from '@/component/gnb';

import * as style from './style.css';

export default async function Page() {
  return (
    <main className={style.main}>
      <Gnb type="app" />
      <div className={style.content}>knowledge hub</div>
    </main>
  );
}
