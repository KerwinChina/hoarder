import { useIsLoggedIn } from "@/lib/session";
import { Redirect } from "expo-router";
import FullPageSpinner from "@/components/ui/FullPageSpinner";

export default function App() {
  const isLoggedIn = useIsLoggedIn();

    if (isLoggedIn === undefined) {
      // Wait until it's loaded
      return <FullPageSpinner />;
    } else if (isLoggedIn) {
      return <Redirect href="dashboard" />
    } else {
      return <Redirect href="signin" />
    }
}
