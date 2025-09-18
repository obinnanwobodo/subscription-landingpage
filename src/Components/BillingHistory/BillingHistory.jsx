"use client";

import React from "react";
import styles from "./BillingHistory.module.css";

const invoices = [
  { id: "INV-2024-003", date: "01/12/2024", plan: "Pro Plan", amount: "$29.00", status: "Paid" },
  { id: "INV-2024-002", date: "01/11/2024", plan: "Pro Plan", amount: "$29.00", status: "Paid" },
  { id: "INV-2024-001", date: "01/10/2024", plan: "Pro Plan", amount: "$29.00", status: "Failed" },
  { id: "INV-2024-000", date: "15/09/2024", plan: "Basic Plan", amount: "$9.00", status: "Paid" },
  { id: "INV-2024-999", date: "15/08/2024", plan: "Basic Plan", amount: "$9.00", status: "Paid" },
];

const BillingHistory = () => {
  const handleViewAll = () => {
    console.log("Viewing all invoices...");
  };

  const handleDownload = (invoiceId) => {
    console.log(`Downloading invoice: ${invoiceId}`);
  };

  return (
    <div className={styles["billing-history-card"]}>
      <div className={styles["billing-header"]}>
        <div className={styles["title-and-description"]}>
          <h2>Billing History</h2>
          <p>Download receipts and view past invoices</p>
        </div>
        <button className={styles["view-all-btn"]} onClick={handleViewAll}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            style={{ width: "16px", height: "16px" }}
          >
            <path
              fill="#6b7280"
              d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H384V288c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V96H64c-35.3 0-64 28.7-64 64V416c0 35.3 28.7 64 64 64zM384 0V96H128V0H384zM160 160H352V288H160V160z"
            />
          </svg>
          View All
        </button>
      </div>

      <div className={styles["table-container"]}>
        <table className={styles["invoice-table"]}>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Date</th>
              <th>Plan</th>
              <th className={styles["amount-header"]}>Amount</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={index}>
                <td data-label="Invoice">{invoice.id}</td>
                <td data-label="Date">{invoice.date}</td>
                <td data-label="Plan">{invoice.plan}</td>
                <td className={styles["amount-cell"]} data-label="Amount">
                  {invoice.amount}
                </td>
                <td data-label="Status">
                  <span
                    className={
                      invoice.status === "Paid"
                        ? styles["status-paid"]
                        : styles["status-failed"]
                    }
                  >
                    {invoice.status}
                  </span>
                </td>
                <td>
                  <button
                    className={styles["download-btn"]}
                    onClick={() => handleDownload(invoice.id)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      style={{ width: "16px", height: "16px" }}
                    >
                      <path
                        fill="#6b7280"
                        d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H384v32c0 17.7-14.3 32-32 32H160c-17.7 0-32-14.3-32-32V352H64z"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BillingHistory;
