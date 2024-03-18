import styles from "@/app/styles/App.module.css";

import Header from "./ui/header/Header";

export default function Home() {
  return (
    <>
      <Header title="Workspace 1" />

      <div className={styles.container}>
        <section className={styles.content}>
          <div>= make background darker </div>
          <div>= tweak box-shadow (main cutting it off?) </div>
          <div>= sort text area styles:</div>
          <div> - larger font, line height </div>
          <div>- title spacing </div>
          <div>= do nav</div>
          <div>- open on hover </div>
          <div>- stay open on press </div>
          <div>- use framer motion </div>
          <div>= change Workspaces to Files?</div>
          <div>
            = fix last-of border styles (have the same padding at bottom as on
            sides)
          </div>
          <div>= add cursor pointer to workspaces divs</div>
          <div>= edit ellipses:</div>
          <div>- dropdown edit/delete icons </div>
          <div>= sign in page: </div>
          <div>-do hover styles & cursor pointer</div>
        </section>
      </div>
    </>
  );
}
