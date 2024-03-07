import { ApolloProvider } from "@apollo/client";
import { client } from "./src/gql/client";
import { RootNavigator } from "./src/navigation/Root";
import { SafeAreaContainer } from "./src/components";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <SafeAreaContainer>
        <RootNavigator />
      </SafeAreaContainer>
    </ApolloProvider>
  );
}
