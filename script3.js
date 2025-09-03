// Handle the PDF generation when the button is clicked
document.getElementById("generatePdfButton").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(22);
    doc.text("Payslip", 105, 20, { align: "center" });

    // Add a table structure with headers
    doc.setFontSize(14);

    // Table headers
    const headers = ['Description', 'Details'];
    const data = [
        ['SSS Number', document.getElementById("displaySSS").textContent],
        ['Pag-IBIG Number', document.getElementById("displayPagibig").textContent],
        ['TIN Number', document.getElementById("displayTIN").textContent],
        ['Salary', `PHP ${document.getElementById("displaySalary").textContent}`],
        ['Deductions', `PHP ${document.getElementById("displayDeductions").textContent}`],
        ['Net Salary', `PHP ${document.getElementById("displayNetSalary").textContent}`]
    ];

    // Table position and formatting
    const tableStartX = 20;
    const tableStartY = 40;
    const columnWidths = [90, 80]; // Adjust column widths if necessary
    const rowHeight = 10;

    // Draw the table headers
    doc.setFontSize(12);
    doc.text(headers[0], tableStartX, tableStartY);
    doc.text(headers[1], tableStartX + columnWidths[0], tableStartY);

    // Draw table rows
    let rowY = tableStartY + rowHeight;
    data.forEach((row, index) => {
        doc.text(row[0], tableStartX, rowY); // Description
        doc.text(row[1], tableStartX + columnWidths[0], rowY); // Details
        rowY += rowHeight;
    });

    // Output the PDF and prompt for download
    doc.save("payslip.pdf");
});
