import { Meeting, columns } from "./Column";
import { DataTable } from "./DataTable";

const data: Meeting[] = [
  {
    id: "1",
    event: "Daily Meeting",
    host: "Jooko",
    startDate: "13-03-2024 08:00",
    endDate: "13-03-2024 09:00",
  },
  {
    id: "2",
    event: "Weekly Meeting",
    host: "Arman",
    startDate: "13-03-2024 08:00",
    endDate: "13-03-2024 09:00",
  },
  {
    id: "3",
    event: "Group Meeting",
    host: "Maulana",
    startDate: "13-03-2024 08:00",
    endDate: "13-03-2024 09:00",
  },
  {
    id: "4",
    event: "Daily Meeting",
    host: "Mul",
    startDate: "13-03-2024 08:00",
    endDate: "13-03-2024 09:00",
  },
  {
    id: "5",
    event: "One on One Meeting",
    host: "Sapto",
    startDate: "13-03-2024 08:00",
    endDate: "13-03-2024 09:00",
  },
  {
    id: "6",
    event: "Daily Meeting",
    host: "Jooko",
    startDate: "13-03-2024 08:00",
    endDate: "13-03-2024 09:00",
  },
  {
    id: "7",
    event: "Daily Meeting",
    host: "Mariana",
    startDate: "13-03-2024 08:00",
    endDate: "13-03-2024 09:00",
  },
];

const ReportContent = () => {
  return (
    <div className="py-4 pl-8 pr-12 h-screen">
      <h1 className="font-bold text-2xl text-black mb-7">Report</h1>
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default ReportContent;
