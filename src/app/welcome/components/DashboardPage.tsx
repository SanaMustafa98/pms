

"use client";
import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";



const DashboardPage: React.FC = () => {
  return (
    <>


<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mt-4">

  <div className="rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark text-4xl text-black font-bold col-span-2">
    <h1>Property Management System Dashboard</h1>
    <p className="text-sm text-black mt-2">Sales Summary</p>
  </div>
</div>

    {/* ============== */}
    <div className="flex gap-4 mt-3">
      <div className=" bg-slate-300 rounded-sm p-4 
      flex-1 border border-gray-200">a</div>
      <div className=" bg-slate-300 rounded-sm p-4 
      flex-1 border border-gray-200">b</div>
      <div className=" bg-slate-300 rounded-sm p-4 
      flex-1 border border-gray-200">c</div>

    </div>
     {/* ============== */}
 
    <div className="mt-3">
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

        </div>


    </>
  );
};

export default DashboardPage;