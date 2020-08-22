import { IonButton, IonMenuButton } from "@ionic/react";
import React, { useEffect } from "react";

export const NavButtons = () => {
  const [mQuery, setMQuery] = React.useState<any>({
    matches: window.innerWidth > 768 ? true : false,
  });

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addListener(setMQuery);
  },[]);

  // MediaQueryListEvent { isTrusted: true, media: "(min-width: 768px)", matches: true ...}
  console.log(mQuery.matches);

  return (
    <div>
      {mQuery && !mQuery.matches ? (
        <IonMenuButton />
      ) : (
        <>
          <IonButton routerLink={"/home"}>Home </IonButton>
          <IonButton routerLink={"/page-1"}>One </IonButton>
          <IonButton routerLink={"/page-2"}>Two</IonButton>
        </>
      )}
    </div>
  );
};
