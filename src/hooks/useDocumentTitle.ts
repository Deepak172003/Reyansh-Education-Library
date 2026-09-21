import { useEffect } from "react";

export default function useDocumentTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title
      ? `${title} — Reyansha Library`
      : "Reyansha Library | Study Library in Chas, Bokaro Steel City";
    return () => {
      document.title = previous;
    };
  }, [title]);
}
