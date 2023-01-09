import { FC } from "react";
import {
  createStyles,
  Header as MantineHeader,
  Group,
  Container,
  Box,
} from "@mantine/core";

import CompanyDropdown from "../../features/company-dropdown/components/CompanyDropdown";
import LogoImage from "../../logo.svg";

const useStyles = createStyles((theme) => ({
  header: {
    width: "100%",
    borderBottom: 0,
    backgroundColor: theme.fn.variant({
      variant: "filled",
      color: theme.primaryColor,
    }).background,
  },

  inner: {
    height: 60,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  logo: {
    maxHeight: 40,
    display: "flex",
    filter: "brightness(0) invert(1)",
  },
}));

const Header: FC = () => {
  const { classes } = useStyles();

  return (
    <MantineHeader height={60} className={classes.header} mb={80}>
      <Container size="xl">
        <Box className={classes.inner}>
          <img src={LogoImage} alt="logo" className={classes.logo} />
          <Group spacing={2}>
            <CompanyDropdown />
          </Group>
        </Box>
      </Container>
    </MantineHeader>
  );
};

export default Header;
