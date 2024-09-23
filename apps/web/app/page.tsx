"use client";

import { useEffect } from "react";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";



export default function Home() {
  interface Ingredient {
    id: number;
    name: string;
  }

  const fetchData = async () => {
    const  API_URL = process.env.API_URL;

    try {
      const response = await fetch(`${API_URL}/ingredients`);
      
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données");
      }

      const data: Ingredient[] = await response.json();
      console.log(data);
    } catch (err) {
      console.error("Erreur de requête :", err);
    }
  };

 
  useEffect(() => {
    fetchData();
  }, []); 


  return (
    <div className={styles.page}>
      <main className={styles.main}>
   
        <Button appName="web" className={styles.secondary}>
          Open alert
        </Button>
      </main>
     
    </div>
  );
}
