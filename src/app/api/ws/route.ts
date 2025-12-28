const KEY =
  "ory_at_11U0DJT-1KuDCXM11V7Myf2eOTTf7-iWCEDiKx_LB8k.66Z4NVf17XCRic9fKaow7YuVgnjqmQKgt933l6mc7Jc";

import { NextResponse } from "next/server";

export const ws = async () => {
  const query = `
  {
    Trading {
      Currencies(
        where: {
          Currency: { Id: { is: "bid:bitcoin" } },
          Interval: { Time: { Duration: { eq: 60 } } }
        },
        limit: { count: 100 },
        orderBy: { descending: Block_Time }
      ) {
        Currency { Id Name Symbol }
        Block { Date Time Timestamp }
        Price {
          Ohlc { Open High Low Close }
        }
      }
    }
  }`;

  const res = await fetch("https://streaming.bitquery.io/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${KEY}`,
    },
    body: JSON.stringify({ query }),
  });

  const data = await res.json();
  console.log("DATA_>>>>>>>>>>>>>>>>>>>>>>>>>", data.data.Trading.Currencies);
  return NextResponse.json(data);
};