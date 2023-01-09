import { FC } from "react";
import { Select, Loader } from "@mantine/core";

import { useAppSelector, useAppDispatch } from "../../../redux/hooks";
import { useGetCompaniesQuery } from "../../../services/api";
import {
  setSelectedCompany,
  selectSelectedCompanyValue,
  SelectedCompany,
} from "../companyDropdownSlice";

const CompanyDropdown: FC = () => {
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
    />
  );
};

export default CompanyDropdown;
