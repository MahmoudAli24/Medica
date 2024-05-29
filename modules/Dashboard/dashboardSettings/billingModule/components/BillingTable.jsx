"use client"
import SettingsHeader from "@/modules/Dashboard/dashboardSettings/components/SettingsHeader";
import {flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {columns} from "@/modules/Dashboard/dashboardSettings/billingModule/components/columns";

const BillingTable = ()=>{
    const data = [{
        id:1,
        Invoice:"Invoice#125874",
        CreatedDate : "25 Dec 2023",
        Amount:149.9,
        Plan:"Professional Plan",
        Status:0,
    },{
        id:2,
        Invoice:"Invoice#125874",
        CreatedDate : "25 Dec 2023",
        Amount:149.9,
        Plan:"Professional Plan",
        Status:1,
    }
    ]
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })
    return(
        <div className={"p-3 rounded-lg mt-3 border border-gray-400"}>
            <SettingsHeader>Billing History</SettingsHeader>
            <div>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}

export default BillingTable;