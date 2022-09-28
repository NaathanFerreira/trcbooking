import { Stack } from "@chakra-ui/react";
import { RiCalendarTodoFill, RiContactsLine } from "react-icons/ri";
import NavLink from "./NavLink";
import NavSection from "./NavSection";

function SidebarNav() {
  return (
    <Stack spacing={12}>
      <NavSection title="Menu">
        <NavLink href="/reservations" icon={RiCalendarTodoFill}>
          Reservas
        </NavLink>
        <NavLink href="/guests" icon={RiContactsLine}>
          Hóspedes
        </NavLink>
      </NavSection>
    </Stack>
  );
}

export default SidebarNav;
