import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useSelector } from "react-redux";
import { COUNTRY_LABELS, TABLE_COLUMNS } from "../../utils/constants";
import { TableMessage } from "./TableMessage";
import "./styles/CountryTable.css";

const columnHelper = createColumnHelper();

const columns = TABLE_COLUMNS.map((column) =>
  columnHelper.accessor(column.id, {
    id: column.id,
    cell: (info) =>
      column.type === "image" ? (
        <img src={info.renderValue()} alt={column.id} width={50} height={50} />
      ) : (
        info.getValue()
      ),
    header: () => <span>{column.title}</span>,
  })
);

export const CountryTable = () => {
  const countryState = useSelector((state) => state.countries);

  const table = useReactTable({
    data: countryState.countryList,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {countryState.isLoading ? (
            <TableMessage content={COUNTRY_LABELS.LOADING} />
          ) : countryState.countryList.length ? (
            table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} title={cell.getValue()}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <TableMessage content={COUNTRY_LABELS.NO_DATA} />
          )}
        </tbody>
      </table>
    </div>
  );
};
