import { useContext, useState } from "react";

import Page from "../components/page/Page";
import { UserContext } from "../contexts/UserContext";

export default function HistoryPage() {
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(UserContext);

  return <Page isLoading={isLoading}>HistoryPage</Page>;
}
