"use client";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Handle link clicks in the PDF
  const onItemClick = ({ pageNumber, uri }) => {
    if (uri) {
      window.open(uri, '_blank');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <Document
          file="/asim_resume.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className="border rounded-lg shadow-lg"
          onItemClick={onItemClick}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page 
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="mb-4"
              width={Math.min(window.innerWidth - 32, 1000)}
            />
          ))}
        </Document>
      </div>
    </div>
  );
}
