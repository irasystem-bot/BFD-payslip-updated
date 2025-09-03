// Handle the PDF generation when the button is clicked
document.getElementById("generatePdfButton").addEventListener("click", function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(22);
    doc.text("Payslip", 105, 20, { align: "center" });

    // Add personal information (view-only)
    doc.setFontSize(14);
    doc.text(`SSS Number: ${document.getElementById("displaySSS").textContent}`, 20, 40);
    doc.text(`Pag-IBIG Number: ${document.getElementById("displayPagibig").textContent}`, 20, 50);
    doc.text(`TIN Number: ${document.getElementById("displayTIN").textContent}`, 20, 60);
    doc.text(`Salary: PHP ${document.getElementById("displaySalary").textContent}`, 20, 80);
    doc.text(`Deductions: PHP ${document.getElementById("displayDeductions").textContent}`, 20, 90);
    doc.text(`Net Salary: PHP ${document.getElementById("displayNetSalary").textContent}`, 20, 100);

    // Output the PDF and prompt for download
    doc.save("payslip.pdf");
});
