import { Container } from "../../contexts/shared/infrastructure/Container";

const container = Container.createContainer([`${__dirname}/application.yaml`]);
container.loadFiles([`${__dirname}/application-test.yaml`]);

export default container;
