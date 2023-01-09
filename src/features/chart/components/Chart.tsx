import { FC } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { LoadingOverlay, Title, Divider, Text, Container } from "@mantine/core";

import { useGetCompanyDatasetQuery } from "../../../services/api";
import { useAppSelector } from "../../../redux/hooks";
import { selectSelectedCompany } from "../../company-dropdown/companyDropdownSlice";
import { createChartOptions } from "../../../utils/chart.utils";

const Chart: FC = () => {
  const selectedValue = useAppSelector(selectSelectedCompany);
  const { value, label } = selectedValue;

  const { data, isFetching, isLoading, isError, error } =
    useGetCompanyDatasetQuery(value, {
      skip: !value,
    });

  return (
    <Container size="xl">
      <LoadingOverlay
        visible={isFetching || isLoading}
        overlayBlur={2}
        zIndex={20}
      />

      {!data && !isError && (
        <>
          <Title my="lg">
            Select or search a company from the menu to view it's historical
            trend
          </Title>
          <Divider size="sm" color="blue" />
        </>
      )}

      {isError && error && (
        <Text color="red">{(error as any)?.data?.quandl_error?.message}</Text>
      )}

      {data && !isError && (
        <HighchartsReact
          options={createChartOptions(data, value, label) || []}
          highcharts={Highcharts}
        />
      )}
    </Container>
  );
};

export default Chart;
