import { Box, Container } from "@radix-ui/themes";
import { ToastContainer, Flip } from "react-toastify";
import { configureWeb3Modal } from "./connection";
import "@radix-ui/themes/styles.css";
import Header from "./component/Header";
import DelegateVote from "./component/DelegateVote";
import useProposals from "./hooks/useProposals";
import VoteHandler from "./component/HandleVote";

configureWeb3Modal();

function App() {
  const { loading, data: proposals } = useProposals();

  return (
    <Container>
      <Header />
      <main className="mt-6">
        <Box mb="4">
          <DelegateVote />
        </Box>

        <VoteHandler proposals={proposals} loading={loading} />
      </main>
      <ToastContainer
        theme="colored"
        transition={Flip}
        hideProgressBar={true}
      />
    </Container>
  );
}

export default App;
