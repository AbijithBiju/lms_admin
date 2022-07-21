import React from 'react'
import { useTable } from 'react-table'
import Createtable from './Createtable'
import { useMemo } from 'react'


const Table = () => {

    const columns = useMemo(
        () => [
          {
            // first group - TV Show
            Header: "Entry Register",
            // First group columns
            columns: [
              {
                Header: "Roll No.",
                accessor: "row.name"
              },
              {
                Header: "Branch",
                accessor: "row.branch"
              },
              {
                Header: "Semester",
                accessor: "row.sem"
              },
              {
                Header: "Entry Time",
                accessor: "row.entry"
              },
              {
                Header: "Exit Time",
                accessor: "row.exit"
              },
              {
                Header: "Status",
                accessor: "row.status"
              }
            ]
          }
        ]
      );
      const data = useMemo(
        () => [
            {
                "row": {
                  "name": "MUT19cs275",
                  "branch": "CSE",
                  "sem": "S6",
                  "entry": "12:30 pm",
                  "exit": "2:30 pm",
                  "status": "on",
              }
            },
        ]
      );

  return (
    <div className='p-3 h-full w-full'>
        <div className="rounded border h-full border-black">
            <Createtable columns={columns} data={data}/>
        </div>
    </div>
  )
}

export default Table