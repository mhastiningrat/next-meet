import { DatePickerWithRange } from "@/components/ui/dateRangePicker";
import NoEvent from "./NoEvent";
import { TabContent } from "./TabContent";

const upcomingData = [
  {
    id: 1,
    title: "Meeting with product",
    note: "Tolong dipersiapkan materinya",
    dateCreated: "11/03/2024",
    dateEvent: "15/03/2024 08:00",
    host: "Jooko",
  },
  {
    id: 2,
    title: "Meeting with markeing",
    note: "mau bahas strategi lebaran",
    dateCreated: "11/03/2024",
    dateEvent: "14/03/2024 08:00",
    host: "Mul",
  },
  {
    id: 3,
    title: "Meeting with finance",
    note: "mau bahas THR",
    dateCreated: "11/03/2024",
    dateEvent: "13/03/2024 08:00",
    host: "Arman",
  },
];

const pendingData = [
  {
    id: 1,
    title: "Meeting with product",
    note: "On hold",
    dateCreated: "11/03/2024",
    dateEvent: "",
    host: "Jooko",
  },
  {
    id: 2,
    title: "Meeting with markeing",
    note: "On hold",
    dateCreated: "11/03/2024",
    dateEvent: "",
    host: "Mul",
  },
  {
    id: 3,
    title: "Meeting with finance",
    note: "On hold",
    dateCreated: "11/03/2024",
    dateEvent: "",
    host: "Arman",
  },
];

const pastData = [
  {
    id: 1,
    title: "Meeting with product",
    note: "Meeting sudah selesai",
    dateCreated: "05/03/2024",
    dateEvent: "08/03/2024 08:08",
    host: "Jooko",
  },
  {
    id: 2,
    title: "Meeting with markeing",
    note: "Meeting sudah selesai",
    dateCreated: "05/03/2024",
    dateEvent: "08/03/2024 08:08",
    host: "Mul",
  },
  {
    id: 3,
    title: "Meeting with finance",
    note: "Meeting sudah selesai",
    dateCreated: "05/03/2024",
    dateEvent: "08/03/2024 08:08",
    host: "Arman",
  },
];

const dateRangeData = [
  {
    id: 0,
    title: "",
    note: "",
    dateCreated: "",
    dateEvent: "",
    host: "",
  },
];

export const UpcomingEvent = () => {
  return (
    <>
      {upcomingData.length > 0 && upcomingData[0].title === "" ? (
        <TabContent idTab="upcoming">
          <NoEvent />
        </TabContent>
      ) : (
        upcomingData.map((i) => {
          return (
            <TabContent
              key={i.id}
              idTab="upcoming"
              title={i.title}
              note={i.note}
              dateCreated={i.dateCreated}
              dateEvent={i.dateEvent}
              host={i.host}
            ></TabContent>
          );
        })
      )}
    </>
  );
};

export const PendingEvent = () => {
  return (
    <>
      {pendingData.length > 0 && pendingData[0].title === "" ? (
        <TabContent idTab="pending">
          <NoEvent />
        </TabContent>
      ) : (
        pendingData.map((i) => {
          return (
            <TabContent
              key={i.id}
              idTab="pending"
              title={i.title}
              note={i.note}
              dateCreated={i.dateCreated}
              dateEvent={i.dateEvent}
              host={i.host}
            ></TabContent>
          );
        })
      )}
    </>
  );
};

export const PastEvent = () => {
  return (
    <>
      {pastData.length > 0 && pastData[0].title === "" ? (
        <TabContent idTab="past">
          <NoEvent />
        </TabContent>
      ) : (
        pastData.map((i) => {
          return (
            <TabContent
              key={i.id}
              idTab="past"
              title={i.title}
              note={i.note}
              dateCreated={i.dateCreated}
              dateEvent={i.dateEvent}
              host={i.host}
            ></TabContent>
          );
        })
      )}
    </>
  );
};

export const DateRangeEvent = () => {
  return (
    <>
      {dateRangeData.length > 0 && dateRangeData[0].title === "" ? (
        <TabContent idTab="date-range">
          <DatePickerWithRange />
          <NoEvent />
        </TabContent>
      ) : (
        dateRangeData.map((i) => {
          return (
            <TabContent
              key={i.id}
              idTab="date-range"
              title={i.title}
              note={i.note}
              dateCreated={i.dateCreated}
              dateEvent={i.dateEvent}
              host={i.host}
            ></TabContent>
          );
        })
      )}
    </>
  );
};
