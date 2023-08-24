import { Subject, debounceTime, takeUntil } from "rxjs";

export const UpdateHashLocation = (() => {
  const hashSubject = new Subject();

  hashSubject
    .pipe(
      debounceTime(300) // Adjust the debounce time as needed
    )
    .subscribe((ID: any) => {
      console.log("Update hash");

      window.location.hash = `#${ID}`;
      //   const newHash = `#${ID}`;
      //   window.history.replaceState(null, "", newHash);
    });

  return (sectionID: string) => {
    hashSubject.next(sectionID);
  };
})();
