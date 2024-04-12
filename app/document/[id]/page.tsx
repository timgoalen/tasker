import { fetchWorkspace } from "@/app/lib/data";
import Header from "@/app/ui/header/Header";
import styles from "@/app/styles/Document.module.css";

export default async function Page({ params }: { params: { id: number } }) {
  const workspace = await fetchWorkspace(params.id);

  return (
    <>
      <Header title={workspace.title}></Header>

      <div className={styles.container}>
        <section className={styles.content}>
          <p>{workspace.body}</p>
        </section>
      </div>
    </>
  );
}
