import { useContext, useState } from "react";

import Page from "../components/page/Page";
import { UserContext } from "../contexts/UserContext";

export default function TodayPage() {
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useContext(UserContext);

  return <Page isLoading={isLoading}>TodayPage</Page>;
}
