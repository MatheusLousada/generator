import ListInformations from "./ListInformations";
import { ListInformationsContainerProps } from "./interfaces/list-informations.interface";

export default function ListInformationsContainer({ informations }: ListInformationsContainerProps) {
  return <ListInformations informations={informations} />;
}
