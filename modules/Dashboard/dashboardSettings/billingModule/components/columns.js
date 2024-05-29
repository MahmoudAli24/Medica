export const columns= [
    {
      accessorKey:"id",
      header: "NO",
        cell:({row})=>{
            return <div>0{row.getValue("id")}</div>;
        }
    },
    {
        accessorKey: "Invoice",
        header: "Invoice",
    },
    {
        accessorKey: "CreatedDate",
        header: "CreatedDate",
    },
    {
        accessorKey: "Amount",
        header: "Amount",
        cell: ({ row }) => {
            const amount = parseFloat(row.getValue("Amount"))
            const formatted = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(amount)

            return <div className="font-medium">{formatted}</div>
        },
    },
    {
        accessorKey: "Plan",
        header: "Plan",
    },
    {
        accessorKey: "Status",
        header: "Status",
        cell:({row})=>{
            if (row.getValue("Status") === 0){
                return <div className={"px-2 py-1 bg-green-400/20 text-center mx-auto text-green-500 rounded"}>Success</div>;
            }else {
                return <div className={"px-2 py-1 bg-red-400/20 text-center mx-auto text-red-500 rounded"}>Filed</div>
            }
        }
    }
]