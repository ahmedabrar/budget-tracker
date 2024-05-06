"use client";

import { UserSettings } from "@prisma/client";
import { startOfMonth } from "date-fns";
import { useState } from "react";

interface Props {
  userSettings: UserSettings;
}

function Overview({ userSettings }: Props) {
  const [dateRange, setDateRange] = useState<{ from: Date; to: Date }>({
    from: startOfMonth(new Date()),
    to: new Date(),
  });
  
  return <div>Overview</div>;
}

export default Overview;
