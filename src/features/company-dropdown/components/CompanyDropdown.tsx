import { FC } from "react";
import { Select, Loader, createStyles } from "@mantine/core";

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { useGetCompaniesQuery } from "../../../services/api";
import {
  setSelectedCompany,
  selectSelectedCompanyValue,
  SelectedCompany,
} from "../companyDropdownSlice";

const useStyles = createStyles((theme) => ({
  selectSize: {
    minWidth: "320px",
    [theme.fn.smallerThan("sm")]: {
      minWidth: "260px",
    },
  },
}));

const CompanyDropdown: FC = () => {
  const { classes } = useStyles();
  const dispatch = useAppDispatch();
  const selectedValue = useAppSelector(selectSelectedCompanyValue);

  const { data, isFetching, isLoading } = useGetCompaniesQuery(undefined);

  const handleChange = (value: string) => {
    const selectedCompanyData = data?.find(
      (company: SelectedCompany) => company.value === value
    );

    if (selectedCompanyData) {
      dispatch(setSelectedCompany(selectedCompanyData));
    }
  };

  return (
    <Select
      my="sm"
      disabled={isFetching || isLoading}
      placeholder="Select Company"
      value={selectedValue}
      data={data || []}
      onChange={handleChange}
      searchable
      rightSection={(isFetching || isLoading) && <Loader size="xs" />}
      className={classes.selectSize}
    />
  );
};

export default CompanyDropdown;
