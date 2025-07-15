// app/page.tsx (server component by default)

import SalesblastIndia from "@/components/SalesblastIndia";

export const metadata = {
  title: 'Salesblast India',
  description: 'SSalesBlast India streamlines email outreach with expert DNS configuration (SPF, DKIM, DMARC), inbox warm-up, and scalable Gmail/M365 infrastructure—built for growth-focused teams.',
};


export default function Page() {
  return <SalesblastIndia />;
}
