import { useEffect } from "react";
import { useHistory } from "@docusaurus/router";

export default function Home() {
  const history = useHistory();

  useEffect(() => {
    history.replace("/age-verification-poc/home/");
  }, [history]);

  return null;
}
