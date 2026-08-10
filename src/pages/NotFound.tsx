import Container from "../components/Container";
import EmptyState from "../components/EmptyState";

function NotFound() {
  return (
    <Container>
      <EmptyState
        message="Página não encontrada."
        action={{ label: "Ir para o início", to: "/" }}
      />
    </Container>
  );
}

export default NotFound;
