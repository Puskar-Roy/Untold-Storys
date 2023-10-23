import Featured from "@/components/Featured/Featured";
import styles from "./homepage.module.css";
import Link from "next/link";
import Category from "@/components/CategoryList/Category";
import CardList from "@/components/CardList/CardList";
import Menu from "@/components/Menu/Menu";


export default function Home() {
  return (
    <div className={styles.container}>
        <Featured/>
        <Category/>
        <div className={styles.content}>
          <CardList/>
          <Menu/>
        </div>
    </div>
  );
}
