import { Table } from 'flowbite-react';
import { useEffect } from 'react';

const TableComp = ({ tableData }) => {
  if (!tableData) {
    return <div>Loading...</div>;
  }
  if (tableData.length > 0) {
    console.log(tableData);
  }

  return (
    <div className="w-full">
      <Table striped className="w-full">
        <Table.Head className="w-full">
          <Table.HeadCell className="w-60"> Name</Table.HeadCell>
          <Table.HeadCell className="w-80">Contact Number</Table.HeadCell>
          <Table.HeadCell className="w-60">Ratings</Table.HeadCell>

          <Table.HeadCell>
            <span className="sr-only">Call </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y w-44">
          {tableData &&
            tableData.map((item) => (
              <Table.Row
                key={item.phone}
                className=" bg-red-500 dark:border-gray-700 dark:bg-gray-800 w-44"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {item.name}
                </Table.Cell>
                <Table.Cell>{item.phone}</Table.Cell>
                <Table.Cell>{item.individual_rating}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default TableComp;
