import { readUserSession } from "@/lib/supabase/action";

export const createOnlineMeeting = async (property: any) => {
  const { data } = await readUserSession();
  const event = {
    summary: property.title,
    description: property.note,
    start: {
      dateTime: property.startDate.toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
    end: {
      dateTime: property.endDate.toISOString(),
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    },
  };
  //console.log(data.session?.provider_token);
  await fetch(
    "https://www.googleapis.com/calendar/v3/calendars/primary/events",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + data.session?.provider_token,
      },
      body: JSON.stringify(event),
    }
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
    });
};
